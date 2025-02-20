import React, { createContext, useState, useEffect } from 'react'

import { Element } from '@craftjs/core'

import Child from '../shared/Child'

import { Container } from '../shared/Container'
import { Text } from '../shared/Text'
import { Link } from '../shared/Link'
import { Svg } from '../shared/Svg'
import { Button } from '../shared/Button'
import { Image } from '../shared/Image'
import { Component } from '../shared/Child'

const themes = [
  { name: 'Hyper UI', folder: 'hyperui', load: () => import(`../../../themes/hyperui`) },
  { name: 'Tailblocks', folder: 'tailblocks', load: () => import(`../../../themes/tailblocks`) },
  { name: 'Meraki UI', folder: 'meraki-light', load: () => import(`../../../themes/meraki-light`) },
]

const getCategories = (components: any) =>
  [...new Set(components?.map((c: any) => c.category))] as string[]

interface ComponentInterface {
  displayName: string
  category: string
  source: any
}

interface ContextInterface {
  components: ComponentInterface[]
  categories: string[]
  themeNames: string[]
  themeIndex: number
  resolver: object
  standalone: boolean
  setStandalone: (arg0: boolean) => void
  updateIndex: (arg0: number) => void
}

const _resolver = {
  Container,
  Component,
  Element,
  Text,
  Child,
  Link,
  Button,
  Image,
  Svg,
}

const defaultValue = {
  components: [],
  categories: [],
  themeNames: [],
  themeIndex: 0,
  updateIndex: () => {},
  resolver: _resolver,
  standalone: false,
  setStandalone: () => {},
}

const ThemeContext = createContext<ContextInterface>(defaultValue)

type ProviderProps = { children: React.ReactNode }

const ThemeProvider: React.FC<ProviderProps> = ({ children }) => {
  const [themeIndex, setThemeIndex] = useState<number>(defaultValue.themeIndex)
  const [components, setComponents] = useState<any[]>(defaultValue.components)
  const [categories, setCategories] = useState<string[]>(defaultValue.categories)
  const [standalone, setStandalone] = useState<boolean>(defaultValue.standalone)
  const [resolver, _setResolver] = useState<object>(defaultValue.resolver)

  const themeNames = themes.map((t) => t.name)

  useEffect(() => {
    updateIndex(0)
  }, [])

  const updateIndex = async (index: number) => {
    setThemeIndex(index)

    const componentsObject = await themes[index].load()
    const componentsArray = Object.values(componentsObject.default) as ComponentInterface[]
    setComponents(
      componentsArray.map((c) => ({
        ...c,
        themeFolder: themes[index].folder,
        blockFolder: c.displayName.replaceAll(' ', '') as string,
      })),
    )
    setCategories(getCategories(componentsArray))
  }

  const value = {
    components,
    categories,
    resolver,
    themeNames,
    themeIndex,
    updateIndex,
    standalone,
    setStandalone,
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}
export { ThemeContext, ThemeProvider }

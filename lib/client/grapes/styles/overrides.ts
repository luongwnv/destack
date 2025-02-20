const cssString: string = `.gjs-one-bg {
  background-color: white !important;
}
.gjs-three-bg {
  color: white !important;
  background-color: #6366f1 !important;
}

.gjs-two-color {
  color: #6366f1 !important;
}

.gjs-four-color {
  color: #6366f1 !important;
}
.gjs-four-color-h:hover {
  color: #6366f1 !important;
  background-color: #f1f1f1 !important;
}

.gjs-field {
  color: #6366f1 !important;
  background-color: #f1f1f1 !important;
}

.gjs-field-checkbox input:checked + .gjs-chk-icon {
  border-color: rgba(99, 102, 241, 0.5); /* #6366f1 */
}

.gjs-category-title,
.gjs-layer-title,
.gjs-block-category .gjs-title,
.gjs-sm-sector .gjs-sm-title,
.gjs-clm-tags .gjs-sm-title {
  background-color: #f1f1f1 !important;
}

.gjs-sm-sector .gjs-sm-field input,
.gjs-clm-tags .gjs-sm-field input,
.gjs-sm-sector .gjs-clm-select input,
.gjs-clm-tags .gjs-clm-select input,
.gjs-sm-sector .gjs-clm-field input,
.gjs-clm-tags .gjs-clm-field input,
.gjs-sm-sector .gjs-sm-field select,
.gjs-clm-tags .gjs-sm-field select,
.gjs-sm-sector .gjs-clm-select select,
.gjs-clm-tags .gjs-clm-select select,
.gjs-sm-sector .gjs-clm-field select,
.gjs-clm-tags .gjs-clm-field select {
  color: #6366f1 !important;
  background-color: #f1f1f1 !important;
}

::placeholder {
  color: #6365f186;
  opacity: 1;
}

.gjs-block {
  padding: 0 !important;
  width: 100% !important;
  min-height: auto !important;
}

.gjs-color-warn {
  color: #ffa100 !important;
}

.gjs-block-label {
  color: transparent !important;
}

#gjs-clm-new {
  color: #6365f1 !important;
}

/* hides component settings panel */
/* span.gjs-pn-btn.fa.fa-cog {
  display: none !important;
} */
.gjs-pn-buttons {
  justify-content: space-around !important;
}

/* hacky way to align the device icons  */
span.gjs-pn-btn.fa.fa-desktop {
  margin-right: 4px;
}
span.gjs-pn-btn.fa.fa-tablet {
  margin-right: 4px;
}
span.gjs-pn-btn.fa.fa-mobile {
  margin-right: auto;
}

.gjs-mdl-dialog {
  max-width: 600px !important;
}

.show-toast {
  animation: showToastAnimation 0.2s ease-out forwards;
}
.hide-toast {
  animation: hideToastAnimation 0.2s ease-out forwards;
}

@keyframes showToastAnimation {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
}

@keyframes hideToastAnimation {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(100%);
  }
}
`
export default cssString

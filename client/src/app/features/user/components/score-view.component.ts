import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ga-score-view',
  template: `
    <div class="ui-g-12">
      <svg width="300" height="80" xmlns="http://www.w3.org/2000/svg">
        <!-- Created with Method Draw - http://github.com/duopixel/Method-Draw/ -->
        <g>
          <title>background</title>
          <rect fill="none" id="canvas_background" height="82" width="302" y="-1" x="-1"/>
          <g display="none" overflow="visible" y="0" x="0" height="100%" width="100%" id="canvasGrid">
            <rect fill="url(#gridpattern)" stroke-width="0" y="0" x="0" height="100%" width="100%"/>
          </g>
        </g>
        <g>
          <title>Layer 1</title>
          <rect id="svg_1" height="31" width="144" y="18.45002" x="4.50002" stroke-width="1.5" stroke="#ffffff" fill="#46bd31"/>
          <rect id="svg_2" height="31" width="144" y="18.45002" x="149.50002" stroke-width="1.5" stroke="#ffffff" fill="#bf0000"/>
          <line stroke-linecap="null" stroke-linejoin="null" id="svg_3" y2="60.49999" x2="149.75004" y1="2.5" x1="149.25004"
                stroke-width="1.5" stroke="#000000" fill="none"/>
          <line stroke-linecap="null" stroke-linejoin="null" id="svg_4" y2="148.49996" x2="250.25002" 
                y1="148.99996" x1="250.75001"
                stroke-width="1.5" stroke="#ffffff" fill="none"/>
          <line stroke-linecap="null" stroke-linejoin="null" id="svg_5" y2="60.49999" x2="176.25003" 
                y1="2.5" x1="175.75003"
                stroke-width="1.5" stroke="#000000" fill="none"/>
          <text xml:space="preserve" 
                text-anchor="start" 
                font-family="Helvetica, Arial, sans-serif" 
                font-size="16" id="svg_6" y="79.49998" x="135.75004" 
                stroke-width="0" stroke="#000000" fill="#000000">
            {{avg}}
          </text>
          <text xml:space="preserve" text-anchor="start" 
                font-family="Helvetica, Arial, sans-serif" 
                font-size="12" id="svg_7" y="75" x="160" 
                stroke-width="0" stroke="#bf0000" fill="#bf0000">
            you
          </text>
          <text xml:space="preserve" text-anchor="start" 
                font-family="Helvetica, Arial, sans-serif" 
                font-size="24" id="svg_8" y="75" x="180" 
                stroke-width="0" stroke="#000000" fill="#bf0000">
            {{currentValue}}
          </text>
        </g>
      </svg>
    </div>
  `,
  styles: [
    '.red {background-color: red; margin-top: 2px; margin-bottom: 2px;}',
    '.green {background-color: green;}'
  ]
})
export class ScoreViewComponent implements OnInit {

  @Input()
  avg: number;

  @Input()
  currentValue: number;

  constructor() {
  }

  ngOnInit() {
  }

}

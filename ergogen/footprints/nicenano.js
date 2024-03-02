// Arduino ProMicro atmega32u4au
// Params
//  orientation: default is down
//    if down, power led will face the pcb
//    if up, power led will face away from pcb

module.exports = {
    params: {
      designator: 'MCU',
      orientation: 'down',
      RAW: { type: 'net', value: 'RAW' },
      GND1: { type: 'net', value: 'GND' },
      RST: { type: 'net', value: 'RST' },
      VCC: { type: 'net', value: 'VCC' },
      P21: { type: 'net', value: 'P21' },
      P20: { type: 'net', value: 'P20' },
      P19: { type: 'net', value: 'P19' },
      COL0: { type: 'net', value: 'COL0' },
      COL1: { type: 'net', value: 'COL1' },
      COL2: { type: 'net', value: 'COL2' },
      COL3: { type: 'net', value: 'COL3' },
      COL4: { type: 'net', value: 'COL4' },
      CS: { type: 'net', value: 'CS' },
      P0: { type: 'net', value: 'P0' },
      GND2: { type: 'net', value: 'GND' },
      GND3: { type: 'net', value: 'GND' },
      MOSI: { type: 'net', value: 'MOSI' },
      SCK: { type: 'net', value: 'SCK' },
      P4: { type: 'net', value: 'P4' },
      P5: { type: 'net', value: 'P5' },
      ROW0: { type: 'net', value: 'ROW0' },
      ROW1: { type: 'net', value: 'ROW1' },
      ROW2: { type: 'net', value: 'ROW2' },
      ROW3: { type: 'net', value: 'ROW3' }
    },
    body: p => {
      const standard = `
        (module ProMicro (layer F.Cu) (tedit 5B307E4C)
        ${p.at /* parametric position */}
  
        ${'' /* footprint reference */}
        (fp_text reference "${p.ref}" (at 0 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
        (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1.27 1.27) (thickness 0.15))))
      
        ${''/* illustration of the (possible) USB port overhang */}
        (fp_line (start -19.304 -3.81) (end -14.224 -3.81) (layer Dwgs.User) (width 0.15))
        (fp_line (start -19.304 3.81) (end -19.304 -3.81) (layer Dwgs.User) (width 0.15))
        (fp_line (start -14.224 3.81) (end -19.304 3.81) (layer Dwgs.User) (width 0.15))
        (fp_line (start -14.224 -3.81) (end -14.224 3.81) (layer Dwgs.User) (width 0.15))
      
        ${''/* component outline */}
        (fp_line (start -17.78 8.89) (end 15.24 8.89) (layer F.SilkS) (width 0.15))
        (fp_line (start 15.24 8.89) (end 15.24 -8.89) (layer F.SilkS) (width 0.15))
        (fp_line (start 15.24 -8.89) (end -17.78 -8.89) (layer F.SilkS) (width 0.15))
        (fp_line (start -17.78 -8.89) (end -17.78 8.89) (layer F.SilkS) (width 0.15))
  
        `
      function pins(def_neg, def_pos) {
        return `
          ${''/* pin names */}
          (fp_text user RAW (at -13.97 ${def_pos}6.3 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify left)))
          (fp_text user GND (at -11.43 ${def_pos}6.3 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify left)))
          (fp_text user RST (at -8.89 ${def_pos}6.3 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify left)))
          (fp_text user VCC (at -6.35 ${def_pos}6.3 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify left)))
          (fp_text user COL0 (at 3.81 ${def_pos}6.3 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify left)))
          (fp_text user COL1 (at 6.35 ${def_pos}6.3 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify left)))
          (fp_text user COL2 (at 8.89 ${def_pos}6.3 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify left)))
          (fp_text user COL3 (at 11.43 ${def_pos}6.3 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify left)))
          (fp_text user COL4 (at 13.97 ${def_pos}6.3 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify left)))
        
          (fp_text user CS (at -13.97 ${def_neg}6.3 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify right)))
          (fp_text user GND (at -8.89 ${def_neg}6.3 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify right)))
          (fp_text user GND (at -6.35 ${def_neg}6.3 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify right)))
          (fp_text user MOSI (at -3.81 ${def_neg}6.3 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify right)))
          (fp_text user SCK (at -1.27 ${def_neg}6.3 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify right)))
          (fp_text user ROW0 (at 6.35 ${def_neg}6.3 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify right)))
          (fp_text user ROW1 (at 8.89 ${def_neg}6.3 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify right)))
          (fp_text user ROW2 (at 11.43 ${def_neg}6.3 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify right)))
          (fp_text user ROW3 (at 13.97 ${def_neg}6.3 ${p.rot + 90}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify right)))

          (fp_text user RAW (at -13.97 ${def_pos}6.3 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify right mirror)))
          (fp_text user GND (at -11.43 ${def_pos}6.3 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify right mirror)))
          (fp_text user RST (at -8.89 ${def_pos}6.3 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify right mirror)))
          (fp_text user VCC (at -6.35 ${def_pos}6.3 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify right mirror)))
          (fp_text user COL0 (at 3.81 ${def_pos}6.3 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify right mirror)))
          (fp_text user COL1 (at 6.35 ${def_pos}6.3 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify right mirror)))
          (fp_text user COL2 (at 8.89 ${def_pos}6.3 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify right mirror)))
          (fp_text user COL3 (at 11.43 ${def_pos}6.3 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify right mirror)))
          (fp_text user COL4 (at 13.97 ${def_pos}6.3 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify right mirror)))
       
          (fp_text user CS (at -13.97 ${def_neg}6.3 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify left mirror)))
          (fp_text user GND (at -8.89 ${def_neg}6.3 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify left mirror)))
          (fp_text user GND (at -6.35 ${def_neg}6.3 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify left mirror)))
          (fp_text user MOSI (at -3.81 ${def_neg}6.3 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify left mirror)))
          (fp_text user SCK (at -1.27 ${def_neg}6.3 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify left mirror)))
          (fp_text user ROW0 (at 6.35 ${def_neg}6.3 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify left mirror)))
          (fp_text user ROW1 (at 8.89 ${def_neg}6.3 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify left mirror)))
          (fp_text user ROW2 (at 11.43 ${def_neg}6.3 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify left mirror)))
          (fp_text user ROW3 (at 13.97 ${def_neg}6.3 ${p.rot + 90}) (layer B.SilkS) (effects (font (size 0.8 0.8) (thickness 0.15)) (justify left mirror)))
  
          ${'' /* description */}
          (fp_text user "Nice!Nano" (at 0 ${def_pos}1 ${p.rot}) (layer F.SilkS knockout) (effects (font (size 1.2 1.2) (thickness 0.20))))
          (fp_text user "Place face down" (at 0 ${def_pos}-1.6 ${p.rot}) (layer F.SilkS) (effects (font (size 1.0 1.0) (thickness 0.15))))
        
          ${''/* and now the actual pins */}
          (pad 1 thru_hole circle (at -13.97 ${def_pos}7.62 ${p.rot}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.RAW.str})
          (pad 2 thru_hole circle (at -11.43 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GND1.str})
          (pad 3 thru_hole circle (at -8.89 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.RST.str})
          (pad 4 thru_hole circle (at -6.35 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.VCC.str})
          (pad 5 thru_hole circle (at -3.81 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P21.str})
          (pad 6 thru_hole circle (at -1.27 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P20.str})
          (pad 7 thru_hole circle (at 1.27 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P19.str})
          (pad 8 thru_hole circle (at 3.81 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.COL0.str})
          (pad 9 thru_hole circle (at 6.35 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.COL1.str})
          (pad 10 thru_hole circle (at 8.89 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.COL2.str})
          (pad 11 thru_hole circle (at 11.43 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.COL3.str})
          (pad 12 thru_hole circle (at 13.97 ${def_pos}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.COL4.str})
          
          (pad 13 thru_hole circle (at -13.97 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.CS.str})
          (pad 14 thru_hole circle (at -11.43 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P0.str})
          (pad 15 thru_hole circle (at -8.89 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GND2.str})
          (pad 16 thru_hole circle (at -6.35 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.GND3.str})
          (pad 17 thru_hole circle (at -3.81 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.MOSI.str})
          (pad 18 thru_hole circle (at -1.27 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.SCK.str})
          (pad 19 thru_hole circle (at 1.27 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P4.str})
          (pad 20 thru_hole circle (at 3.81 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.P5.str})
          (pad 21 thru_hole circle (at 6.35 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.ROW0.str})
          (pad 22 thru_hole circle (at 8.89 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.ROW1.str})
          (pad 23 thru_hole circle (at 11.43 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.ROW2.str})
          (pad 24 thru_hole circle (at 13.97 ${def_neg}7.62 0) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.SilkS *.Mask) ${p.ROW3.str})
  
          ${''/* rect around RAW */}
          (pad "" thru_hole rect (at -13.97 7.62 ${p.rot}) (size 1.7526 1.7526) (drill 1.1) (layers F.Cu F.Mask) (zone_connect 0) ${p.RAW.str})
          (pad "" thru_hole rect (at -13.97 -7.62 ${p.rot}) (size 1.7526 1.7526) (drill 1.1) (layers B.Cu B.Mask) (zone_connect 0) ${p.CS.str})
        `
      }
      if (p.orientation == 'down') {
        return `
          ${standard}
          ${pins('-', '')})
          `
      } else {
        return `
          ${standard}
          ${pins('', '-')})
          `
      }
    }
  }
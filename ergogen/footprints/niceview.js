module.exports = {
    params: {
        designator: 'Nice!View',
        side: 'F',
        outline: false,
        VCC: { type: 'net', value: 'VCC' },
        GND: { type: 'net', value: 'GND' },
        MOSI: { type: 'net', value: 'MOSI' },
        SCK: { type: 'net', value: 'SCK' },
        CS: { type: 'net', value: 'CS' },
    },
    body: p => {
        const standard = `
            (module lib:niceview_headers (layer F.Cu) (tedit 648E0265)
            ${p.at /* parametric position */} 

            ${'' /* footprint reference */}        
            (fp_text reference "${p.ref}" (at -1.6 0) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
            (fp_text value "" (at 0 0) (layer F.SilkS) hide (effects (font (size 1 1) (thickness 0.15))))

            ${'' /* pins */}
            (pad 4 thru_hole oval (at 0.0 -5.08 ${p.rot + 270}) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask)
            ${p.MOSI.str})
            (pad 3 thru_hole oval (at 0.0 -2.54 ${p.rot + 270}) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask)
            ${p.SCK.str})
            (pad 2 thru_hole oval (at 0.0  0.00 ${p.rot + 270}) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask)
            ${p.VCC.str})
            (pad 1 thru_hole oval (at 0.0  2.54 ${p.rot + 270}) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask)
            ${p.GND.str})
            (pad 1 thru_hole oval (at 0.0  5.08 ${p.rot + 270}) (size 1.7 1.7) (drill 1) (layers *.Cu *.Mask)
            ${p.CS.str})

            ${'' /* corner marks */}
            (fp_line (start -1.25 -7) (end -1.25 7) (layer Dwgs.User) (width 0.15))
            (fp_line (start -1.25 7) (end 34.75 7) (layer Dwgs.User) (width 0.15))
            (fp_line (start 34.75 7) (end 34.75 -7) (layer Dwgs.User) (width 0.15))
            (fp_line (start 34.75 -7) (end -1.25 -7) (layer Dwgs.User) (width 0.15))

        `
        function outline() {
            return `
              ${'' /* Nice!View outline */}
              (fp_line (start -1.25 -6.5) (end -1.25 6.5) (layer F.SilkS) (width 0.15))
              (fp_line (start -1.25 6.5) (end 1.25 6.5) (layer F.SilkS) (width 0.15))
              (fp_line (start 1.25 6.5) (end 1.25 -6.5) (layer F.SilkS) (width 0.15))
              (fp_line (start 1.25 -6.5) (end -1.25 -6.5) (layer F.SilkS) (width 0.15))

              ${'' /* labels */}
              (fp_text user Nice!View (at 2.5 3.5 ${p.rot+90}) (layer F.SilkS knockout) (effects (font (size 1.0 1.0) (thickness 0.15)) (justify right)))
              (fp_text user MOSI (at -2 -5.08 ${p.rot}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.10)) (justify right)))
              (fp_text user SCK (at -2 -2.54 ${p.rot}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.10)) (justify right)))
              (fp_text user VCC (at -2 -0 ${p.rot}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.10)) (justify right)))
              (fp_text user GND (at -2 2.54 ${p.rot}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.10)) (justify right)))
              (fp_text user CS (at -2 5.08 ${p.rot}) (layer F.SilkS) (effects (font (size 0.8 0.8) (thickness 0.10)) (justify right)))
              `
        }
        if (p.outline) {
            return `
              ${standard}
              ${outline()})
              `
        } else {
            return `${standard})`
        }
    }

}
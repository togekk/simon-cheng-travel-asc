export function render_trigger(trigger_top: f64): f64 {
    var b: f64;
    if (trigger_top > -200) {
        b = 1 - trigger_top / 200;
    } else {
        b = 4 - trigger_top / -200;
    }

    if (b >= 0) {
        return b;
    } else {
        return 0;
    }
}

export function render_scroll_hint(scrolling_offset: f64): f64 {
    var a: f64 = 1 - scrolling_offset / 100;
    if (a >= 0) {
        if (a <= 1) {
            return a;
        } else {
            return 1;
        }
    } else {
        return 0;
    }
}

export function render_prologue_box(scrolling_offset: f64): f64 {
    var a: f64 = (7500 - scrolling_offset) / 300;
    if (a >= 0) {
        if (a <= 1) {
            return a;
        } else {
            return 1;
        }
    } else {
        return 0;
    }
}

export function render_fadein(scrolling_offset: f64, duration: i8): f64 {
    var a: f64 = scrolling_offset / 700 - duration;
    if (a >= 0) {
        if (a <= 1) {
            return a;
        } else {
            return 1;
        }
    } else {
        return 0;
    }
}
import { HTMLMOV } from './HTMLMOV.js';
function convertTime(num, select) {
    let ms = 0;
    let s = 0;
    let min = 0;
    let h = 0;
    if (select === "ms") {
        ms = num;
        s = num / 1000;
        min = num / 60000;
        h = num / 3600000;
    }
    else if (select === "s") {
        ms = num * 1000;
        s = num;
        min = num / 60;
        h = num / 3600;
    }
    else if (select === "min") {
        ms = num * 60000;
        s = num * 60;
        min = num;
        h = num / 60;
    }
    else if (select === "h") {
        ms = num * 3600000;
        s = num * 3600;
        min = num * 60;
        h = num;
    }
    else {
        num = 0;
    }
    return { ms, s, min, h };
}
// --- 実行テスト ---
let result = convertTime(1, "min");
console.log(result.ms);
console.log(result.s);
console.log(result.min);
console.log(result.h);
let btn = document.getElementById("sub_btn");
btn.onclick = function () {
    const num_in = HTMLMOV.get_num("num");
    const select_in = HTMLMOV.get_str("select");
    const ans = convertTime(num_in, select_in);
    HTMLMOV.set_str("ms", ans.ms.toFixed(2));
    HTMLMOV.set_str("s", ans.s.toFixed(2));
    HTMLMOV.set_str("min", ans.min.toFixed(2));
    HTMLMOV.set_str("h", ans.h.toFixed(2));
};
//# sourceMappingURL=main.js.map
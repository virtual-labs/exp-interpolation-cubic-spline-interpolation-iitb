let maindiv = (document.getElementById('pannelcreate'));
function activity1() {
    let text = `
    <div class='divide'>
        <div style='margin-top: 2vw;'>
            <br>
            <h4 class="center-text fs-20px fw-600">Interpolation: Cubic Spline Interpolation</h4>
            <br>
            <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
        </div>
    </div>`;
    maindiv.innerHTML = text;
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
    internal_calculation1();
}
function start_act1() {
    let temp_btn = (document.getElementById('temp-btn-1'));
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text('Activity 1', 'act1-div');
    let text = `
   ${btn_text}
   <div class='collapse center-text divide fs-18px fb-500' style='margin-top: 2vw; margin: auto;' id='act1-div'>
      <p style="text-align:left">
         Natural cubic spline at g(0.66) and g(1.75)
      </p>
      <div id="act1-tb-box1"></div>
   </div>`;
    maindiv.innerHTML += text;
    let tb_box = (document.getElementById('act1-tb-box1'));
    let header = ['x', 'f(x)', 'f[x<sub>0</sub>,x<sub>1</sub>]'];
    let tab = new Verify_Rows_Cols_Custom_Fixed_Update1(header, table_data1, [0, 1, 2, 3], [[2], [2], [2], []], '', tb_box, true, true, after_verify1, 4);
    // let tab = new Display_Table(header, table_data1, tb_box);
    tab.load_table();
    hide_all_steps();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    setTimeout(() => {
        show_step('act1-div');
    }, 150);
}
function internal_calculation1() {
    let a_val = random1(1, 5);
    console.log('a=', a_val);
    for (let i = 0; i < table_data1.length; i++) {
        let fx = a_val * Math.pow(Math.E, table_data1[i][0]) - Math.pow(table_data1[i][0], 2);
        table_data1[i].push(fx);
    }
    for (let i = 0; i < table_data1.length; i++) {
        if (i === table_data1.length - 1) {
            table_data1[i].push('-');
        }
        else {
            let fx = (table_data1[i + 1][1] - table_data1[i][1]) /
                (table_data1[i + 1][0] - table_data1[i][0]);
            table_data1[i].push(fx);
            h.push(table_data1[i + 1][0] - table_data1[i][0]);
        }
    }
    H = [
        [2 * (h[0] + h[1]), h[1]],
        [h[1], 2 * (h[1] + h[2])],
    ];
    C = [
        [6 * (table_data1[1][2] - table_data1[0][2])],
        [6 * (table_data1[2][2] - table_data1[1][2])],
    ];
}
function internal_calculation2() {
    table_data2 = [];
    let temp_c = [C[0][0], C[1][0]];
    let temp_mat = gauss(H, temp_c);
    S = [[temp_mat[0]], [temp_mat[1]]];
    s.splice(1, 0, S[0][0], S[1][0]);
    for (let i = 0; i < table_data1.length - 1; i++) {
        a[i] = (s[i + 1] - s[i]) / (6 * h[i]);
        b[i] = s[i] / 2;
        c[i] =
            (table_data1[i + 1][1] - table_data1[i][1]) / h[i] -
                (2 * h[i] * s[i] + h[i] * s[i + 1]) / 6;
        d[i] = table_data1[i][1];
        let ar = [
            i,
            `${table_data1[i][0]} to ${table_data1[i + 1][0]}`,
            `${parseFloat(a[i].toFixed(3))}(x-${table_data1[i][0]})<sup>3</sup> + ${parseFloat(b[i].toFixed(3))}(x-${table_data1[i][0]})<sup>2</sup> + ${parseFloat(c[i].toFixed(3))}(x-${table_data1[i][0]}) + ${parseFloat(d[i].toFixed(3))}`,
        ];
        table_data2.push(ar);
    }
    g066 =
        a[0] * Math.pow((0.66 - 0), 3) +
            b[0] * Math.pow((0.66 - 0), 2) +
            c[0] * (0.66 - 0) +
            d[0];
    g175 =
        a[2] * Math.pow((1.75 - 1.5), 3) +
            b[2] * Math.pow((1.75 - 1.5), 2) +
            c[2] * (1.75 - 1.5) +
            d[2];
}
function after_verify1() {
    let div = (document.getElementById('act1-div'));
    div.innerHTML += `
   <button class='btn btn-info btn-sm std-btn' onclick='load_verify_h();' id='act1-btn6'>Next</button>
   `;
    // internal_calculation2();
}
function load_verify_h() {
    let btn = (document.getElementById('act1-btn6'));
    btn && btn.remove();
    let div = (document.getElementById('act1-div'));
    div.innerHTML += `
   <br>
   <p>Condition 1 s<sub>0</sub> = s<sub>3</sub> = 0</p>
   <div id="h-div">
      <div class="row justify-content-center" style="align-item:center;">
         <div class="col-sm-2">h<sub>0</sub>=</div>
         <div class="col-sm-3">
            <input type='number' id='h0-inp' class='form-control fs-16px' />
         </div>
      </div>
      <br>
      <div class="row justify-content-center" style="align-item:center;">
         <div class="col-sm-2">h<sub>1</sub>=</div>
         <div class="col-sm-3">
            <input type='number' id='h1-inp' class='form-control fs-16px' />
         </div>
      </div>
      <br>
      <div class="row justify-content-center" style="align-item:center;">
         <div class="col-sm-2">h<sub>2</sub>=</div>
         <div class="col-sm-3">
            <input type='number' id='h2-inp' class='form-control fs-16px' />
         </div>
      </div>
      <br>
      <button class='btn btn-info btn-sm std-btn' onclick='a1_verify_h();' id='act1-vf-btn2'>Verify</button>
   </div>
   `;
}
function a1_verify_h() {
    let h0_inp = (document.getElementById('h0-inp'));
    let h1_inp = (document.getElementById('h1-inp'));
    let h2_inp = (document.getElementById('h2-inp'));
    console.log(h);
    if (!verify_values(parseFloat(h0_inp.value), h[0])) {
        h0_inp.style.border = '1px solid red';
        alert('Incorrect h0 value');
        return;
    }
    else {
        h0_inp.style.border = '1px solid #ced4da';
        h0_inp.disabled = true;
    }
    if (!verify_values(parseFloat(h1_inp.value), h[1])) {
        h1_inp.style.border = '1px solid red';
        alert('Incorrect h1 value');
        return;
    }
    else {
        h1_inp.style.border = '1px solid #ced4da';
        h1_inp.disabled = true;
    }
    if (!verify_values(parseFloat(h2_inp.value), h[2])) {
        h2_inp.style.border = '1px solid red';
        alert('Incorrect h2 value');
        return;
    }
    else {
        h2_inp.style.border = '1px solid #ced4da';
        h2_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = document.getElementById('h-div');
    div.innerHTML = '';
    div.innerHTML = `
   <div class="row justify-content-center">
      <div class="col-sm-3">h<sub>0</sub> = ${h[0]}</div>
      <div class="col-sm-3">h<sub>1</sub> = ${h[1]}</div>
      <div class="col-sm-3">h<sub>2</sub> = ${h[2]}</div>
   </div>
   <br>
   <button class='btn btn-info btn-sm std-btn' onclick='load_verify_H();' id='act1-btn1'>Next</button>
   `;
}
function load_verify_H() {
    let btn = (document.getElementById('act1-btn1'));
    btn && btn.remove();
    let div = (document.getElementById('act1-div'));
    div.innerHTML += `
   <div>
      $$
         [H]\× [S] = [C]
      $$
      <br>
      $$
         [H] = \\begin{bmatrix}
         2(h_0 + h_1) & h_1 \\\\
         h_1 & 2(h_1 + h_2)
         \\end{bmatrix}
      $$
   </div>
   <div id="h-matrix-div" >
      <div class="row justify-content-center">
         <div class="col-sm-2" style="padding-top:10px">
            [H] = 
         </div>
         <div class="col-sm-10" id="h-matrix-verify-div">
         
         </div>
      </div>

   </div>
   `;
    let header = [];
    let tb_box = (document.getElementById('h-matrix-verify-div'));
    let tab = new Verify_Rows_Cols_Custom_Fixed_Update1(header, H, [0, 1], [
        [0, 1],
        [0, 1],
    ], '', tb_box, false, false, after_verify_H, 4);
    tab.load_table();
    // after_verify_H();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function after_verify_H() {
    let tb_box = (document.getElementById('h-matrix-div'));
    tb_box.innerHTML = '';
    let mat = new Matrix('[H]', H, tb_box);
    mat.load_matrix();
    let div = (document.getElementById('act1-div'));
    div.innerHTML += `
   <button class='btn btn-info btn-sm std-btn' onclick='load_verify_c();' id='act1-btn2'>Next</button>
   `;
}
function load_verify_c() {
    let btn = (document.getElementById('act1-btn2'));
    btn && btn.remove();
    let div = (document.getElementById('act1-div'));
    div.innerHTML += `
   <br>
   <div>
      $$
         [C] = 6\\begin{bmatrix}
         f[x_1,x_2] - f[x_0,x_1] \\\\
         f[x_2,x_3] - f[x_1,x_2]
         \\end{bmatrix}
      $$
   </div>
   <div id="c-matrix-div" >
      <div class="row justify-content-center">
         <div class="col-sm-2" style="padding-top:10px">
            [C] = 
         </div>
         <div class="col-sm-10" id="c-matrix-verify-div">
         
         </div>
      </div>

   </div>
   `;
    let header = [];
    let tb_box = (document.getElementById('c-matrix-verify-div'));
    let tab = new Verify_Rows_Cols_Custom_Fixed_Update1(header, C, [0, 1], [[0], [0]], '', tb_box, false, false, after_verify_c, 4);
    tab.load_table();
    // after_verify_c();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function after_verify_c() {
    internal_calculation2();
    let tb_box = (document.getElementById('c-matrix-div'));
    tb_box.innerHTML = '';
    let mat = new Matrix('[C]', C, tb_box);
    mat.load_matrix();
    let div = (document.getElementById('act1-div'));
    div.innerHTML += `
   <button class='btn btn-info btn-sm std-btn' onclick='load_verify_s();' id='act1-btn3'>Next</button>
   `;
}
function load_verify_s() {
    let btn = (document.getElementById('act1-btn3'));
    btn && btn.remove();
    let div = (document.getElementById('act1-div'));
    div.innerHTML += `
   <br>
   <p style="text-align:left;">Solving system of equation, we get,</p>
   <div id="s-matrix-div" >
      <div class="row justify-content-center">
         <div class="col-sm-2" style="padding-top:10px">
            [S] = 
         </div>
         <div class="col-sm-10" id="s-matrix-verify-div">
         
         </div>
      </div>

   </div>
   `;
    let header = [];
    let tb_box = (document.getElementById('s-matrix-verify-div'));
    let tab = new Verify_Rows_Cols_Custom_Fixed_Update1(header, S, [0, 1], [[0], [0]], '', tb_box, false, false, after_verify_s, 4);
    tab.load_table();
    // after_verify_s();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function after_verify_s() {
    let tb_box = (document.getElementById('s-matrix-div'));
    tb_box.innerHTML = '';
    let mat = new Matrix('[S]', S, tb_box);
    mat.load_matrix();
    let div = (document.getElementById('act1-div'));
    div.innerHTML += `
   <button class='btn btn-info btn-sm std-btn' onclick='load_interval1_verify();' id='act1-btn4'>Next</button>
   `;
}
function load_interval1_verify() {
    let btn = (document.getElementById('act1-btn4'));
    btn && btn.remove();
    let div = (document.getElementById('act1-div'));
    div.innerHTML += `
   <br>
   <div>
      $$ a_i = \\frac{S_{i+1} - S_i}{6h_i} $$
      $$ b_i = \\frac{S_i}{2} $$
      $$ c_i = \\frac{y_{i+1} - y_i}{h_i} - \\frac{2h_iS_i + h_iS_{i+1}}{6} $$
      $$ d_i = y_i $$
   </div>
   <div id="act1-int1-div">
      <p> for interval 0 to 1</p>
      <div class="row justify-content-center" style="align-items:center;">
         <div class="row col-md-6 justify-content-center " >
            <div class="col-sm-2">
               a = 
            </div>
            <div class="col-sm-4">
               <input type='number' id='a1-inp' class='form-control fs-16px' />
            </div>
         </div>
         <div class="row col-md-6 justify-content-center " >
            <div class="col-sm-2">
               b = 
            </div>
            <div class="col-sm-4">
               <input type='number' id='b1-inp' class='form-control fs-16px' />
            </div>
         </div>
      </div>
      <br>
      <div class="row justify-content-center" style="align-items:center;">
         <div class="row col-md-6 justify-content-center " >
            <div class="col-sm-2">
               c = 
            </div>
            <div class="col-sm-4">
               <input type='number' id='c1-inp' class='form-control fs-16px' />
            </div>
         </div>
         <div class="row col-md-6 justify-content-center " >
            <div class="col-sm-2">
               d = 
            </div>
            <div class="col-sm-4">
               <input type='number' id='d1-inp' class='form-control fs-16px' />
            </div>
         </div>
      </div>
      <br>
      <button class='btn btn-info btn-sm std-btn' onclick='a1_verify_int1();' id='act1-vf-btn3'>Verify</button>
   </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a1_verify_int1() {
    let a_inp = (document.getElementById('a1-inp'));
    let b_inp = (document.getElementById('b1-inp'));
    let c_inp = (document.getElementById('c1-inp'));
    let d_inp = (document.getElementById('d1-inp'));
    console.log(a[0], b[0], c[0], d[0]);
    if (!verify_values(parseFloat(a_inp.value), parseFloat(a[0].toFixed(3)))) {
        a_inp.style.border = '1px solid red';
        alert('Incorrect a value');
        return;
    }
    else {
        a_inp.style.border = '1px solid #ced4da';
        a_inp.disabled = true;
    }
    if (!verify_values(parseFloat(b_inp.value), parseFloat(b[0].toFixed(3)))) {
        b_inp.style.border = '1px solid red';
        alert('Incorrect b value');
        return;
    }
    else {
        b_inp.style.border = '1px solid #ced4da';
        b_inp.disabled = true;
    }
    if (!verify_values(parseFloat(c_inp.value), parseFloat(c[0].toFixed(3)))) {
        c_inp.style.border = '1px solid red';
        alert('Incorrect c value');
        return;
    }
    else {
        c_inp.style.border = '1px solid #ced4da';
        c_inp.disabled = true;
    }
    if (!verify_values(parseFloat(d_inp.value), parseFloat(d[0].toFixed(3)))) {
        d_inp.style.border = '1px solid red';
        alert('Incorrect d value');
        return;
    }
    else {
        d_inp.style.border = '1px solid #ced4da';
        d_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-int1-div'));
    div.innerHTML = '';
    div.innerHTML += `
   <p> for interval 0 to 1</p>
   <div class="row justify-content-center">
      <div class="col-sm-3">a = ${parseFloat(a[0].toFixed(3))}</div>
      <div class="col-sm-3">b = ${parseFloat(b[0].toFixed(3))}</div>
      <div class="col-sm-3">c = ${parseFloat(c[0].toFixed(3))}</div>
      <div class="col-sm-3">d = ${parseFloat(d[0].toFixed(3))}</div>
   </div>
   <br>
   <div id="act1-int2-div">
      <p> for interval 1 to 1.5</p>
      <div class="row justify-content-center" style="align-items:center;">
         <div class="row col-md-6 justify-content-center " >
            <div class="col-sm-2">
               a = 
            </div>
            <div class="col-sm-4">
               <input type='number' id='a2-inp' class='form-control fs-16px' />
            </div>
         </div>
         <div class="row col-md-6 justify-content-center " >
            <div class="col-sm-2">
               b = 
            </div>
            <div class="col-sm-4">
               <input type='number' id='b2-inp' class='form-control fs-16px' />
            </div>
         </div>
      </div>
      <br>
      <div class="row justify-content-center" style="align-items:center;">
         <div class="row col-md-6 justify-content-center " >
            <div class="col-sm-2">
               c = 
            </div>
            <div class="col-sm-4">
               <input type='number' id='c2-inp' class='form-control fs-16px' />
            </div>
         </div>
         <div class="row col-md-6 justify-content-center " >
            <div class="col-sm-2">
               d = 
            </div>
            <div class="col-sm-4">
               <input type='number' id='d2-inp' class='form-control fs-16px' />
            </div>
         </div>
      </div>
      <br>
      <button class='btn btn-info btn-sm std-btn' onclick='a1_verify_int2();' id='act1-vf-btn4'>Verify</button>
   </div>
   `;
}
function a1_verify_int2() {
    let a_inp = (document.getElementById('a2-inp'));
    let b_inp = (document.getElementById('b2-inp'));
    let c_inp = (document.getElementById('c2-inp'));
    let d_inp = (document.getElementById('d2-inp'));
    console.log(a[1], b[1], c[1], d[1]);
    if (!verify_values(parseFloat(a_inp.value), parseFloat(a[1].toFixed(3)))) {
        a_inp.style.border = '1px solid red';
        alert('Incorrect a value');
        return;
    }
    else {
        a_inp.style.border = '1px solid #ced4da';
        a_inp.disabled = true;
    }
    if (!verify_values(parseFloat(b_inp.value), parseFloat(b[1].toFixed(3)))) {
        b_inp.style.border = '1px solid red';
        alert('Incorrect b value');
        return;
    }
    else {
        b_inp.style.border = '1px solid #ced4da';
        b_inp.disabled = true;
    }
    if (!verify_values(parseFloat(c_inp.value), parseFloat(c[1].toFixed(3)))) {
        c_inp.style.border = '1px solid red';
        alert('Incorrect c value');
        return;
    }
    else {
        c_inp.style.border = '1px solid #ced4da';
        c_inp.disabled = true;
    }
    if (!verify_values(parseFloat(d_inp.value), parseFloat(d[1].toFixed(3)))) {
        d_inp.style.border = '1px solid red';
        alert('Incorrect d value');
        return;
    }
    else {
        d_inp.style.border = '1px solid #ced4da';
        d_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-int2-div'));
    div.innerHTML = '';
    div.innerHTML += `
   <p> for interval 1 to 1.5</p>
   <div class="row justify-content-center">
      <div class="col-sm-3">a = ${parseFloat(a[1].toFixed(3))}</div>
      <div class="col-sm-3">b = ${parseFloat(b[1].toFixed(3))}</div>
      <div class="col-sm-3">c = ${parseFloat(c[1].toFixed(3))}</div>
      <div class="col-sm-3">d = ${parseFloat(d[1].toFixed(3))}</div>
   </div>
   <br>
   <div id="act1-int3-div">
      <p> for interval 1.5 to 2.25</p>
      <div class="row justify-content-center" style="align-items:center;">
         <div class="row col-md-6 justify-content-center " >
            <div class="col-sm-2">
               a = 
            </div>
            <div class="col-sm-4">
               <input type='number' id='a3-inp' class='form-control fs-16px' />
            </div>
         </div>
         <div class="row col-md-6 justify-content-center " >
            <div class="col-sm-2">
               b = 
            </div>
            <div class="col-sm-4">
               <input type='number' id='b3-inp' class='form-control fs-16px' />
            </div>
         </div>
      </div>
      <br>
      <div class="row justify-content-center" style="align-items:center;">
         <div class="row col-md-6 justify-content-center " >
            <div class="col-sm-2">
               c = 
            </div>
            <div class="col-sm-4">
               <input type='number' id='c3-inp' class='form-control fs-16px' />
            </div>
         </div>
         <div class="row col-md-6 justify-content-center " >
            <div class="col-sm-2">
               d = 
            </div>
            <div class="col-sm-4">
               <input type='number' id='d3-inp' class='form-control fs-16px' />
            </div>
         </div>
      </div>
      <br>
      <button class='btn btn-info btn-sm std-btn' onclick='a1_verify_int3();' id='act1-vf-btn5'>Verify</button>
   </div>
   `;
}
function a1_verify_int3() {
    let a_inp = (document.getElementById('a3-inp'));
    let b_inp = (document.getElementById('b3-inp'));
    let c_inp = (document.getElementById('c3-inp'));
    let d_inp = (document.getElementById('d3-inp'));
    console.log(a[2], b[2], c[2], d[2]);
    if (!verify_values(parseFloat(a_inp.value), parseFloat(a[2].toFixed(3)))) {
        a_inp.style.border = '1px solid red';
        alert('Incorrect a value');
        return;
    }
    else {
        a_inp.style.border = '1px solid #ced4da';
        a_inp.disabled = true;
    }
    if (!verify_values(parseFloat(b_inp.value), parseFloat(b[2].toFixed(3)))) {
        b_inp.style.border = '1px solid red';
        alert('Incorrect b value');
        return;
    }
    else {
        b_inp.style.border = '1px solid #ced4da';
        b_inp.disabled = true;
    }
    if (!verify_values(parseFloat(c_inp.value), parseFloat(c[2].toFixed(3)))) {
        c_inp.style.border = '1px solid red';
        alert('Incorrect c value');
        return;
    }
    else {
        c_inp.style.border = '1px solid #ced4da';
        c_inp.disabled = true;
    }
    if (!verify_values(parseFloat(d_inp.value), parseFloat(d[2].toFixed(3)))) {
        d_inp.style.border = '1px solid red';
        alert('Incorrect d value');
        return;
    }
    else {
        d_inp.style.border = '1px solid #ced4da';
        d_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-int3-div'));
    div.innerHTML = '';
    div.innerHTML += `
   <p> for interval 1.5 to 2.25</p>
   <div class="row justify-content-center">
      <div class="col-sm-3">a = ${parseFloat(a[2].toFixed(3))}</div>
      <div class="col-sm-3">b = ${parseFloat(b[2].toFixed(3))}</div>
      <div class="col-sm-3">c = ${parseFloat(c[2].toFixed(3))}</div>
      <div class="col-sm-3">d = ${parseFloat(d[2].toFixed(3))}</div>
   </div>
   <br>
   <button class='btn btn-info btn-sm std-btn' onclick='load_interval_table();' id='act1-btn7'>Next</button>
   `;
}
function load_interval_table() {
    let btn = (document.getElementById('act1-btn7'));
    btn && btn.remove();
    let div = (document.getElementById('act1-div'));
    div.innerHTML += `
   <br>
   <div id="act1-tb-box2" >
   </div>
   <div id="act1-g-div">
      <div class="row justify-content-center" style="align-items:center;">
         <div class="col-md-2">
            g(0.66) =
         </div>
         <div class="col-md-4">
            <input  type='number' id='g066-inp' class='form-control fs-16px' />
         </div>
      </div>
      <br>
      <div class="row justify-content-center" style="align-items:center;">
         <div class="col-md-2">
            g(1.75) =
         </div>
         <div class="col-md-4">
            <input  type='number' id='g175-inp' class='form-control fs-16px' />
         </div>
      </div>
      <br>
      <button class='btn btn-info btn-sm std-btn' onclick='a1_verify_g();' id='act1-vf-btn1'>Verify</button>
   </div>
   `;
    let header = ['i', 'Interval', 'g<sub>i</sub>(x)'];
    let tb_box = (document.getElementById('act1-tb-box2'));
    let tab = new Display_Table(header, table_data2, tb_box);
    tab.load_table();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a1_verify_g() {
    let g066_inp = (document.getElementById('g066-inp'));
    let g175_inp = (document.getElementById('g175-inp'));
    console.log(g066, g175);
    if (!verify_values(parseFloat(g066_inp.value), parseFloat(g066.toFixed(4)))) {
        g066_inp.style.border = '1px solid red';
        alert('Incorrect g(0.66) value');
        return;
    }
    else {
        g066_inp.style.border = '1px solid #ced4da';
        g066_inp.disabled = true;
    }
    if (!verify_values(parseFloat(g175_inp.value), parseFloat(g175.toFixed(4)))) {
        g175_inp.style.border = '1px solid red';
        alert('Incorrect g(1.75) value');
        return;
    }
    else {
        g175_inp.style.border = '1px solid #ced4da';
        g175_inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-g-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <div class="row justify-content-center">
         <div class="col-sm-4">
            $$g(0.66) = ${parseFloat(g066.toFixed(4))}$$
         </div>
         <div class="col-sm-4">
            $$ g(1.75) = ${parseFloat(g175.toFixed(4))} $$
         </div>
      </div>
      <br>
      <button class='btn btn-info btn-sm std-btn' onclick='exp_complete();' id='act1-btn5'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function exp_complete() {
    alert('Experiment Completed');
    let btn = (document.getElementById('act1-btn5'));
    btn && btn.remove();
}
activity1();
//# sourceMappingURL=activity1.js.map
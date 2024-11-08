const examQuestionsList = [
  {
    id: "d4544997-f925-422c-b79a-d459dc325b67",
    question: "下列哪幾項是變數 $$x$$ 與 $$y$$ 的線性方程式？（複選）",
    option: {
      a: "$$2xy - 6y = 0$$",
      b: "$$e^{-2x} + 5y = 8$$",
      c: "$$\\dfrac{x}{2} - \\dfrac{y}{4} = 0$$",
      d: "$$x^{-2} + 2y^{-2} = 6$$",
    },
    answer: ["b", "c"],
  },
  {
    id: "e5648722-a763-4a2a-8fd2-49d8a937f8e3",
    question:
      "若一個線性方程式系統經過一連串的基本列運算後，則與原來的線性方程式系統等價嗎？",
    option: {
      a: "對，等價",
      b: "不對，不等價",
      c: "不一定",
      d: "以上皆非",
    },
    answer: ["a"],
  },
  {
    id: "f93827d4-c12f-4b63-8f3a-9c9b1e3d1234",
    question: "下列哪些矩陣是列梯形形式（row-echelon form）？（複選）",
    option: {
      a: `$$\\begin{bmatrix} 1 & 2 & -1 & 4 \\\\ 0 & 1 & 0 & 3 \\\\ 0 & 0 & 1 & -2 \\end{bmatrix}$$`,
      b: `$$\\begin{bmatrix} 1 & -5 & 2 & -1 \\\\ 0 & 0 & 1 & 3 \\\\ 0 & 0 & 0 & 4 \\\\ 0 & 0 & 0 & 1 \\end{bmatrix}$$`,
      c: `$$\\begin{bmatrix} 1 & 2 & -3 & 4 \\\\ 0 & 2 & 1 & -3 \\\\ 0 & 0 & 1 & -3 \\end{bmatrix}$$`,
      d: `$$\\begin{bmatrix} 1 & 0 & 0 & -1 \\\\ 0 & 1 & 0 & 2 \\\\ 0 & 0 & 1 & 3 \\\\ 0 & 0 & 0 & 0 \\end{bmatrix}$$`,
    },
    answer: ["a", "b", "d"],
  },
  {
    id: "h1234f6a-d890-4e12-a123-4f3b5c8e9f01",
    question:
      "解下列聯立方程組：$$\\begin{cases} x - y = 6 \\\\ 2x + y = -6 \\end{cases}$$",
    option: {
      a: "$$(0, -6)$$",
      b: "$$(1, -5)$$",
      c: "$$(-1, -1)$$",
      d: "$$(1, -1)$$",
    },
    answer: ["a"],
  },
  {
    id: "g784f1d2-e674-4d5a-912e-6c3b5e5a9e67",
    question:
      "解下列聯立方程組：$$\\begin{cases} 3x - y = 5 \\\\ 6x - 2y = 10 \\end{cases}$$",
    option: {
      a: "$$(3, -3)$$",
      b: "$$(5, -5)$$",
      c: "無解",
      d: "無限多組解",
    },
    answer: ["d"],
  },
  {
    id: "h4567g8d-d123-4a56-a789-1f2g3h4i5j6k",
    question:
      "解下列聯立方程組：$$\\begin{cases} -x - 2y = -13 \\\\ -4x + 2y = 2 \\end{cases}$$",
    option: {
      a: "$$\\left( \\dfrac{11}{5}, \\dfrac{27}{5} \\right)$$",
      b: "$$\\left( \\dfrac{27}{5}, \\dfrac{11}{5} \\right)$$",
      c: "$$\\left( \\dfrac{-27}{5}, \\dfrac{-11}{5} \\right)$$",
      d: "$$\\left( a, \\dfrac{26 - 2a}{5} \\right), \\text{其中 } a \\text{ 為任意實數}$$",
    },
    answer: ["a"],
  },
  {
    id: "i7890h1j-k234-4b56-c789-2g3h4i5j6l7m",
    question:
      "解下列聯立方程組：$$\\begin{cases} x + y + z = -6 \\\\ x - 6y - 7z = -29 \\\\ -7y - 5z = 4 \\end{cases}$$",
    option: {
      a: "$$(9, -7, -8)$$",
      b: "$$(-7, -8, 9)$$",
      c: "$$(-8, -7, 9)$$",
      d: "$$(-7, -6, 10)$$",
    },
    answer: ["c"],
  },
  {
    id: "j1234k5l-m678-4n90-o123-5p6q7r8s9t0u",
    question:
      "判斷下列矩陣是否為列梯形形式（row-echelon form）。如果是，判斷其是否也是列簡梯形形式（reduced row-echelon form）。$$\\begin{bmatrix} 1 & -9 & 2 & -7 \\\\ 0 & 1 & 0 & -1 \\\\ 0 & 0 & 1 & 1 \\end{bmatrix}$$",
    option: {
      a: "row-echelon form",
      b: "reduced row-echelon form",
      c: "row-echelon form and reduced row-echelon form",
      d: "兩者都不是",
    },
    answer: ["a"],
  },
  {
    id: "k4567l8m-n901-4p23-q456-6r7s8t9u0v1w",
    question:
      "給定的矩陣是線性方程組的增廣矩陣，求該系統的解：$$\\begin{bmatrix} 1 & 2 & 5 & \\vert & -9 \\\\ 2 & -2 & 4 & \\vert & -6 \\\\ 0 & 1 & -3 & \\vert & 6 \\end{bmatrix}$$",
    option: {
      a: "$$x = 2, \\; y = 3, \\; z = -6$$",
      b: "$$x = 1, \\; y = 3, \\; z = -2$$",
      c: "$$x = 2, \\; y = 0, \\; z = -2$$",
      d: "$$x = 1, \\; y = 0, \\; z = -2$$",
    },
    answer: ["d"],
  },
  {
    id: "l5678m9n-o123-4q56-r789-7s8t9u0v1w2x",
    question:
      "求拋物線方程 $$y = ax^2 + bx + c$$，已知通過以下三點：$$(0, -4)$$、$$(1, -2)$$、$$(2, 2)$$。",
    option: {
      a: "$$y = x^2 - x + 4$$",
      b: "$$y = x^2 + x + 4$$",
      c: "$$y = 2x^2 + x - 4$$",
      d: "$$y = x^2 + x - 4$$",
    },
    answer: ["d"],
  },
  {
    id: "m6789n0o-p234-5q67-r890-8t9u0v1w2x3y",
    question:
      "計算 $$A - B$$，其中 $$A = \\begin{bmatrix} 8 & -5 \\\\ 8 & -8 \\end{bmatrix}$$，$$B = \\begin{bmatrix} -5 & 9 \\\\ -2 & 5 \\end{bmatrix}$$。",
    option: {
      a: "$$\\begin{bmatrix} 13 & -14 \\\\ 10 & -13 \\end{bmatrix}$$",
      b: "$$\\begin{bmatrix} 3 & 4 \\\\ 6 & -3 \\end{bmatrix}$$",
      c: "$$\\begin{bmatrix} 13 & -5 \\\\ 8 & -13 \\end{bmatrix}$$",
      d: "$$\\begin{bmatrix} -50 & 97 \\\\ -56 & 112 \\end{bmatrix}$$",
    },
    answer: ["a"],
  },
  {
    id: "n7890o1p-q345-6r78-s901-9t0u1v2w3x4y",
    question:
      "計算 $$CD$$，其中 $$C = \\begin{bmatrix} 5 & -4 \\\\ 4 & -3 \\end{bmatrix}$$，$$D = \\begin{bmatrix} 5 & 3 \\\\ -1 & -2 \\end{bmatrix}$$。",
    option: {
      a: "$$\\begin{bmatrix} 20 & -4 \\\\ 16 & -3 \\end{bmatrix}$$",
      b: "$$\\begin{bmatrix} 13 \\\\ 2 \\end{bmatrix}$$",
      c: "$$\\begin{bmatrix} 29 & 23 \\\\ 23 & 18 \\end{bmatrix}$$",
      d: "$$\\begin{bmatrix} 13 \\\\ 2 \\end{bmatrix}$$",
    },
    answer: ["c"],
  },
  {
    id: "o8901p2q-r456-7s89-t012-0u1v2w3x4y5z",
    question:
      "計算下列矩陣的乘積：$$\\begin{bmatrix} 1 & 2 & -5 \\end{bmatrix} \\begin{bmatrix} -3 \\\\ 2 \\\\ -4 \\end{bmatrix}$$",
    option: {
      a: "$$\\begin{bmatrix} -3 & 4 & 20 \\end{bmatrix}$$",
      b: "$$\\begin{bmatrix} -19 \\end{bmatrix}$$",
      c: "$$\\begin{bmatrix} 21 \\end{bmatrix}$$",
      d: "$$\\begin{bmatrix} -3 \\\\ 4 \\\\ 20 \\end{bmatrix}$$",
    },
    answer: ["c"],
  },
  {
    id: "p9012q3r-s567-8t90-u123-1v2w3x4y5z6a",
    question:
      "計算 $$A^2$$，其中 $$A = \\begin{bmatrix} -3 & -4 \\\\ 4 & 5 \\end{bmatrix}$$。",
    option: {
      a: "$$\\begin{bmatrix} -7 & -8 \\\\ 8 & 9 \\end{bmatrix}$$",
      b: "$$\\begin{bmatrix} 9 & 16 \\\\ 16 & 25 \\end{bmatrix}$$",
      c: "$$\\begin{bmatrix} -7 & 8 \\\\ -8 & 9 \\end{bmatrix}$$",
      d: "$$\\begin{bmatrix} -3 & -8 \\\\ 8 & 25 \\end{bmatrix}$$",
    },
    answer: ["a"],
  },
  {
    id: "q0123r4s-t678-9u01-v234-2w3x4y5z6a7b",
    question:
      "給定矩陣 $$A = \\begin{bmatrix} 2 & -2 \\\\ 5 & 6 \\\\ 0 & -3 \\end{bmatrix}$$，計算 $$A^T A$$。",
    option: {
      a: "$$A^T A = \\begin{bmatrix} 29 & -26 \\\\ 34 & 49 \\end{bmatrix}$$",
      b: "$$A^T A = \\begin{bmatrix} 29 & 26 \\\\ -34 & 49 \\end{bmatrix}$$",
      c: "$$A^T A = \\begin{bmatrix} 34 & 29 \\\\ 49 & -26 \\end{bmatrix}$$",
      d: "$$A^T A = \\begin{bmatrix} 29 & 26 \\\\ 26 & 49 \\end{bmatrix}$$",
    },
    answer: ["b"],
  },
  {
    id: "r1234s5t-u678-9v01-w234-3x4y5z6a7b8c",
    question:
      "給定 $$\\mathbf{X} = \\begin{bmatrix} 4 \\\\ 0 \\\\ 4 \\end{bmatrix}$$，$$\\mathbf{Y} = \\begin{bmatrix} 4 \\\\ 4 \\\\ 0 \\end{bmatrix}$$，$$\\mathbf{Z} = \\begin{bmatrix} -12 \\\\ -24 \\\\ 12 \\end{bmatrix}$$，求常數 $$a$$ 和 $$b$$，使得 $$\\mathbf{Z} = a\\mathbf{X} + b\\mathbf{Y}$$。",
    option: {
      a: "$$a = 3, \\; b = -6$$",
      b: "$$a = 4, \\; b = -12$$",
      c: "$$a = -6, \\; b = -3$$",
      d: "$$a = 12, \\; b = -6$$",
    },
    answer: ["a"],
  },
  {
    id: "s2345t6u-v789-0w12-x345-4y5z6a7b8c9d",
    question:
      "求下列矩陣的反矩陣：$$\\begin{bmatrix} 5 & 3 \\\\ 13 & 8 \\end{bmatrix}$$。",
    option: {
      a: "$$\\begin{bmatrix} 5 & 3 \\\\ -13 & -8 \\end{bmatrix}$$",
      b: "$$\\begin{bmatrix} -3 & 8 \\\\ -5 & 13 \\end{bmatrix}$$",
      c: "$$\\begin{bmatrix} -5 & 13 \\\\ 3 & -8 \\end{bmatrix}$$",
      d: "$$\\begin{bmatrix} 8 & -3 \\\\ -13 & 5 \\end{bmatrix}$$",
    },
    answer: ["d"],
  },
  {
    id: "t3456u7v-w890-1x23-y456-5z6a7b8c9d0e",
    question:
      "求下列矩陣的反矩陣：$$\\begin{bmatrix} 0 & 1 & 1 \\\\ 1 & 1 & 0 \\\\ 0 & 1 & 0 \\end{bmatrix}$$。",
    option: {
      a: "$$\\begin{bmatrix} 0 & -1 & 1 \\\\ 1 & 0 & -1 \\\\ -1 & 0 & -1 \\end{bmatrix}$$",
      b: "$$\\begin{bmatrix} 0 & 1 & -1 \\\\ 0 & 0 & 1 \\\\ 1 & 0 & -1 \\end{bmatrix}$$",
      c: "$$\\begin{bmatrix} 0 & -1 & 1 \\\\ 0 & 1 & 0 \\\\ -1 & 0 & -1 \\end{bmatrix}$$",
      d: "$$\\begin{bmatrix} 0 & -1 & -1 \\\\ 1 & 0 & 0 \\\\ -1 & 0 & -1 \\end{bmatrix}$$",
    },
    answer: ["b"],
  },
  {
    id: "u4567v8w-x901-2y34-z567-6a7b8c9d0e1f",
    question:
      "下列哪一個選項的乘積會得到 $$A$$？其中 $$A = \\begin{bmatrix} -3 & 1 \\\\ 2 & -1 \\end{bmatrix}$$。",
    option: {
      a: "$$\\begin{bmatrix} 1 & 0 \\\\ -4 & 1 \\end{bmatrix} \\begin{bmatrix} -1 & 0 \\\\ 3 & -1 \\end{bmatrix} \\begin{bmatrix} 1 & 0 \\\\ 1 & -1 \\end{bmatrix}$$",
      b: "$$\\begin{bmatrix} -1 & -1 \\\\ 0 & 1 \\end{bmatrix} \\begin{bmatrix} 1 & 0 \\\\ -3 & 1 \\end{bmatrix} \\begin{bmatrix} 0 & 1 \\\\ 1 & 0 \\end{bmatrix}$$",
      c: "$$\\begin{bmatrix} -1 & -1 \\\\ 0 & 1 \\end{bmatrix} \\begin{bmatrix} 1 & 0 \\\\ 3 & -1 \\end{bmatrix} \\begin{bmatrix} 1 & 0 \\\\ 1 & 1 \\end{bmatrix}$$",
      d: "$$\\begin{bmatrix} -1 & 1 \\\\ 0 & 1 \\end{bmatrix} \\begin{bmatrix} 1 & 0 \\\\ 3 & 1 \\end{bmatrix} \\begin{bmatrix} 1 & 1 \\\\ 0 & 1 \\end{bmatrix}$$",
    },
    answer: ["c"],
  },
  {
    id: "v5678w9x-y012-3z45-a678-7b8c9d0e1f2g",
    question:
      "下列哪個選項是矩陣 $$\\begin{bmatrix} 1 & 0 \\\\ 9 & 1 \\end{bmatrix}$$ 的 LU 分解？",
    option: {
      a: "$$\\begin{bmatrix} 1 & -9 \\\\ 0 & 1 \\end{bmatrix} \\begin{bmatrix} 1 & 0 \\\\ 0 & -1 \\end{bmatrix}$$",
      b: "$$\\begin{bmatrix} \\dfrac{1}{9} & 1 \\\\ 0 & 1 \\end{bmatrix} \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$$",
      c: "$$\\begin{bmatrix} 1 & 0 \\\\ -\\dfrac{1}{9} & 1 \\end{bmatrix} \\begin{bmatrix} 1 & 0 \\\\ 0 & -1 \\end{bmatrix}$$",
      d: "$$\\begin{bmatrix} 1 & 0 \\\\ 9 & 1 \\end{bmatrix} \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}$$",
    },
    answer: ["d"],
  },
  // ... 其他題目繼續 ...
];

export default examQuestionsList;

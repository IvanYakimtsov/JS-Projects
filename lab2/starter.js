



window.onload = function () {
    var p = 0;
    var m = 0;
    var q = 0;
    var n = 0;
    var totalRang = 0;
    var Tn = 0;
    var Knr = 0;
    var Enr = 0;
    var Dnr = 0;
    var L = 0;
    var additionTime = 0;
    var divisionTime = 0;
    var multiplicationTime = 0;
    var comparisonTime = 0;
    var absTime = 0;
    var T1 = 0;

    var A = [];
    var B = [];
    var C = [];

    function generateData() {
        for (var i = 0; i < p; i++) {
            A[i] = new Array();
            for (var j = 0; j < m; j++) {
                A[i][j] = (2 * Math.random() - 1).toFixed(4);
            }
        }

        for (var i = 0; i < m; i++) {
            B[i] = new Array();
            for (var j = 0; j < q; j++) {
                B[i][j] = (2 * Math.random() - 1).toFixed(4);
            }
        }

    }

    function calculateKnr() {
        Knr = T1 / Tn;
    }

    function calculateEnr() {
        calculateKnr()
        Enr = Knr / n;
    }

    function calculateD() {
        L = L / totalRang;
        D = Tn / L;
    }

    function generateMatrix() {


        var table = document.getElementById('main-table');
        var tableRow = document.createElement('tr');

        var matrix;
        var matrixRow;
        var matrixCell;
        var matrixTitle;

        var tableCell = document.createElement('td');
        matrix = document.createElement('table');
        matrixTitle = document.createElement('caption');
        matrixTitle.innerHTML = "Matrix A:";
        matrix.appendChild(matrixTitle);

        for (var i = 0; i < p; i++) {
            matrixRow = document.createElement('tr');
            for (var j = 0; j < m; j++) {
                matrixCell = document.createElement('td');
                matrixCell.innerHTML = A[i][j];
                matrixRow.appendChild(matrixCell);
            }
            matrix.appendChild(matrixRow);
        }
        tableCell.appendChild(matrix);
        tableRow.appendChild(tableCell);

        tableCell = document.createElement('td');
        matrix = document.createElement('table');
        matrixTitle = document.createElement('caption');
        matrixTitle.innerHTML = "Matrix B:";
        matrix.appendChild(matrixTitle);

        for (var i = 0; i < m; i++) {
            matrixRow = document.createElement('tr');
            for (var j = 0; j < q; j++) {
                matrixCell = document.createElement('td');
                matrixCell.innerHTML = B[i][j];
                matrixRow.appendChild(matrixCell);
            }
            matrix.appendChild(matrixRow);
        }
        tableCell.appendChild(matrix);
        tableRow.appendChild(tableCell);
        table.appendChild(tableRow);

        // tableRow = document.createElement('tr');
        // tableCell = document.createElement('td');
        // tableCell.setAttribute('colspan', '2');
        // tableCell.setAttribute('align', 'center');
        // matrix = document.createElement('table');
        // matrixTitle = document.createElement('caption');
        // matrixTitle.innerHTML = "Matrix E:";
        // matrix.appendChild(matrixTitle);
        // matrixRow = document.createElement('tr');
        // for (var j = 0; j < m; j++) {
        //     matrixCell = document.createElement('td');
        //     matrixCell.innerHTML = E[j];
        //     matrixRow.appendChild(matrixCell);
        // }
        // matrix.appendChild(matrixRow);
        // tableCell.appendChild(matrix);
        // tableRow.appendChild(tableCell);
        // table.appendChild(tableRow);

    }


    // function calculateConsistentCalculationTime() {
    //     for (var i = 0; i < p; i++) {
    //         for (var j = 0; j < q; j++) {
    //             for (var k = 0; k < m; k++) {
    //
    //                 T1 = T1 + 3 * absTime + divisionTime
    //                     + comparisonTime + 3 * multiplicationTime;
    //             }
    //
    //             T1 = T1 + (m - 1) * additionTime;
    //         }
    //     }
    // }

    function generateResult() {

        var table = document.getElementById('main-table');
        var tableRow = document.createElement('tr');

        var matrix;
        var matrixRow;
        var matrixCell;
        var matrixTitle;

        var tableCell = document.createElement('td');
        matrix = document.createElement('table');
        matrixTitle = document.createElement('caption');
        matrixTitle.innerHTML = "Result Matrix:";
        matrix.appendChild(matrixTitle);

        for (var i = 0; i < p; i++) {
            matrixRow = document.createElement('tr');
            for (var j = 0; j < q; j++) {
                matrixCell = document.createElement('td');
                matrixCell.innerHTML = C[i][j];
                matrixRow.appendChild(matrixCell);
            }
            matrix.appendChild(matrixRow);
        }
        tableCell.appendChild(matrix);
        tableRow.appendChild(tableCell);

        tableCell = document.createElement('td');
        tableCell.innerHTML = "Calculation time : " + Tn + "<br>"
            + "Consist calculation time : " + T1 + "<br>"
            + "Speed : " + Knr.toFixed(4) + "<br>" + "Efficiency : " + Enr.toFixed(4) + "<br>"
            + "Coefficient of discrepancy: " + D.toFixed(4);
        tableRow.appendChild(tableCell);
        table.appendChild(tableRow);


        document.body.appendChild(table);
    }


    // function calculateCij(i, j) {
    //     var D = new Array(m);
    //     var k = 0;
    //     var lastOperationNumber = 0;
    //     while (k < m) {
    //         lastOperationNumber = k + n;
    //         if (lastOperationNumber > m) lastOperationNumber = m;
    //         for (k; k < lastOperationNumber; k++) {
    //             D[k] = (Math.abs(Math.abs(A[i][k]) - Math.abs(B[k][j])) < E[k]) ? A[i][k] * A[i][k] : A[i][k] * A[i][k] * B[k][j];
    //             L += 3 * (3 * absTime + divisionTime + comparisonTime + 3 * multiplicationTime);
    //             T1 += (3 * absTime + divisionTime + comparisonTime + 3 * multiplicationTime);
    //         }
    //         Tn = Tn + 3 * absTime + divisionTime + comparisonTime + 3 * multiplicationTime;
    //     }
    //     var sumN = n;
    //
    //     while (D.length != 1) {
    //         while (true) {
    //             if (sumN * 2 <= D.length) break;
    //             else {
    //                 sumN--;
    //             }
    //         }
    //         for (var i = 0; i < sumN; i++) {
    //             D.push(D.shift() + D.shift());
    //             L += 6 * additionTime;
    //             T1 += additionTime;
    //         }
    //         Tn += additionTime;
    //     }
    //
    //     return D[0];
    // }

    function calculateCij(i, j) {
        var C = 0;

        var compositionAmountTrue = 0;
        var compositionAmountFalse = 0;
        var secondCompositionAmountTrue = 0;
        var secondCompositionAmountFalse = 0;
        for (var k = 0; k < m; k++) {
            if (Math.abs(A[i][k]) < Math.abs(B[k][j])) {
                compositionAmountTrue++;
                C += A[i][k] * B[k][j];
                T1 += multiplicationTime;
                L += 2 * multiplicationTime;
            } else {
                compositionAmountFalse++;
                if (A[i][k] * B[k][j] == 0) {
                    secondCompositionAmountTrue++;
                    C += A[i][k] + B[k][j];
                    T1 += additionTime;
                    L += 2 * additionTime;
                } else {
                    secondCompositionAmountFalse++;
                    C += A[i][k] / B[k][j] + B[k][j] / A[i][k];
                    T1 += 2 * divisionTime + additionTime;
                    L += 2 * (2 * divisionTime + additionTime);
                }
                T1 += multiplicationTime + comparisonTime;
                L += 2 * (multiplicationTime + comparisonTime);
            }
            T1 += 2 * absTime + comparisonTime;
            L += 2 * (2 * absTime + comparisonTime);
        }
        Tn += Math.ceil(m / n) * ( 2 * absTime + comparisonTime );
        Tn += Math.ceil(compositionAmountTrue / n) * multiplicationTime;
        Tn += Math.ceil(compositionAmountFalse / n) * ( multiplicationTime + comparisonTime );
        Tn += Math.ceil(secondCompositionAmountTrue / n) * additionTime;
        Tn += Math.ceil(secondCompositionAmountFalse / n) * ( 2 * divisionTime + additionTime );
        var addAmount = m;
        var sumN = n;
        while (addAmount != 1) {
            if (sumN * 2 > addAmount) {
                sumN--;
            } else {
                addAmount -= sumN;
                T1 += sumN * additionTime
                L += sumN * 4 * additionTime;
                Tn += additionTime;
            }
        }
        return C.toFixed(4);
    }


    function






    calculateResult() {
        for (var i = 0; i < p; i++) {
            C[i] = new Array();
            for (var j = 0; j < q; j++) {
                C[i][j] = calculateCij(i, j);
            }
        }
    }


    document.getElementById("parSubmit").onclick = function () {

        p = 0;
        m = 0;
        q = 0;
        n = 0;
        Tn = 0;
        Knr = 0;
        Enr = 0;
        Dnr = 0;
        L = 0;
        additionTime = 0;
        divisionTime = 0;
        multiplicationTime = 0;
        comparisonTime = 0;
        absTime = 0;
        T1 = 0;

        var elementsValue = document.forms["slick-login"].elements["number"];


        for (var i = 0; i < elementsValue.length; i++) {
            if (elementsValue[i].value == "") {
                alert("not all fields are filled");
                return;

            }
        }

        var table = document.getElementById('main-table');
        table.innerHTML = "";


        p = parseInt(elementsValue[0].value);
        m = parseInt(elementsValue[1].value);
        q = parseInt(elementsValue[2].value);
        n = parseInt(elementsValue[3].value);
        additionTime = parseInt(elementsValue[4].value);
        divisionTime = parseInt(elementsValue[5].value);
        multiplicationTime = parseInt(elementsValue[6].value);
        comparisonTime = parseInt(elementsValue[7].value);
        absTime = parseInt(elementsValue[8].value);

        totalRang = m * 2 * p * q;

        generateData();
        generateMatrix();
        calculateResult();
        calculateEnr();
        calculateD();
        generateResult();
    }


    document.getElementById("runBenchmark").onclick = function () {
        A = [];
        B = [];
        C = [];

        Tn = 0;
        Knr = 0;
        Enr = 0;
        Dnr = 0;

        var elementsValue = document.forms["slick-login"].elements["number"];
        for (var i = 0; i < elementsValue.length; i++) {
            if (elementsValue[i].value == "") {
                alert("not all fields are filled");
                return;

            }
        }
        p = parseInt(elementsValue[0].value);
        m = parseInt(elementsValue[1].value);
        q = parseInt(elementsValue[2].value);
        n = parseInt(elementsValue[3].value);
        additionTime = parseInt(elementsValue[4].value);
        divisionTime = parseInt(elementsValue[5].value);
        multiplicationTime = parseInt(elementsValue[6].value);
        comparisonTime = parseInt(elementsValue[7].value);
        absTime = parseInt(elementsValue[8].value);
        T1 = 1;
        document.body.innerHTML = "<div id=\"chart1\"></div>";
        document.body.innerHTML += "<div id=\"chart2\"></div>";
        document.body.innerHTML += "<div id=\"chart3\"></div>";
        document.body.innerHTML += "<div id=\"chart4\"></div>";
        document.body.innerHTML += "<div id=\"chart5\"></div>";
        document.body.innerHTML += "<div id=\"chart6\"></div>";

        google.charts.load('current', {'packages': ['line']});
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {

            var benchmark = [];


            var RBenchmark = [];
            for (m = 1; m < 21; m++) {
                RBenchmark[m - 1] = new Array();
                generateData();
                RBenchmark[m - 1].push(A);
                RBenchmark[m - 1].push(B);
            }


            for (n = 1; n < 71; n++) {
                benchmark[n - 1] = new Array();
                benchmark[n - 1].push(n);
                for (m = 1; m < 21; m++) {
                    A = RBenchmark[m - 1][0];
                    B = RBenchmark[m - 1][1];
                    C = [];
                    Tn = 0;
                    T1 = 0;
                    Knr = 0;
                    Enr = 0;
                    Dnr = 0;
                    calculateResult();
                    calculateEnr();
                    benchmark[n - 1].push(Knr);
                }
            }


            var data = new google.visualization.DataTable();
            data.addColumn('number', 'n');
            data.addColumn('number', '1');
            data.addColumn('number', '2');
            data.addColumn('number', '3');
            data.addColumn('number', '4');
            data.addColumn('number', '5');
            data.addColumn('number', '6');
            data.addColumn('number', '7');
            data.addColumn('number', '8');
            data.addColumn('number', '9');
            data.addColumn('number', '10');
            data.addColumn('number', '11');
            data.addColumn('number', '12');
            data.addColumn('number', '13');
            data.addColumn('number', '14');
            data.addColumn('number', '15');
            data.addColumn('number', '16');
            data.addColumn('number', '17');
            data.addColumn('number', '18');
            data.addColumn('number', '19');
            data.addColumn('number', '20');

            data.addRows(benchmark);

            var options = {
                vAxis: {
                    title: 'K(n,r)'
                },
                width: 1347,
                height: 500

            };

            var chart = new google.charts.Line(document.getElementById('chart1'));

            chart.draw(data, google.charts.Line.convertOptions(options));

            benchmark = [];
            m = 31;
            A = [];
            B = [];
            generateData();

            for (m = 1; m < 31; m++) {
                benchmark[m - 1] = new Array();
                benchmark[m - 1].push(m);
                for (n = 1; n < 21; n++) {
                    C = [];

                    Tn = 0;
                    T1 = 0;
                    Knr = 0;
                    Enr = 0;
                    Dnr = 0;
                    calculateResult();
                    calculateEnr();
                    benchmark[m - 1].push(Knr);
                }
            }

            data = new google.visualization.DataTable();
            data.addColumn('number', 'r');
            data.addColumn('number', '1');
            data.addColumn('number', '2');
            data.addColumn('number', '3');
            data.addColumn('number', '4');
            data.addColumn('number', '5');
            data.addColumn('number', '6');
            data.addColumn('number', '7');
            data.addColumn('number', '8');
            data.addColumn('number', '9');
            data.addColumn('number', '10');
            data.addColumn('number', '11');
            data.addColumn('number', '12');
            data.addColumn('number', '13');
            data.addColumn('number', '14');
            data.addColumn('number', '15');
            data.addColumn('number', '16');
            data.addColumn('number', '17');
            data.addColumn('number', '18');
            data.addColumn('number', '19');
            data.addColumn('number', '20');

            data.addRows(benchmark);

            options = {
                vAxis: {
                    title: 'K(n,r)'
                },
                width: 1347,
                height: 500

            };

            chart = new google.charts.Line(document.getElementById('chart2'));
            chart.draw(data, google.charts.Line.convertOptions(options));

            benchmark = [];
            m = 31;
            A = [];
            B = [];
            generateData();

            for (m = 1; m < 31; m++) {
                benchmark[m - 1] = new Array();
                benchmark[m - 1].push(m);
                for (n = 1; n < 21; n++) {
                    C = [];

                    Tn = 0;
                    T1 = 0;
                    Knr = 0;
                    Enr = 0;
                    Dnr = 0;
                    calculateResult();
                    calculateEnr();
                    benchmark[m - 1].push(Enr);
                }
            }

            data = new google.visualization.DataTable();
            data.addColumn('number', 'r');
            data.addColumn('number', '1');
            data.addColumn('number', '2');
            data.addColumn('number', '3');
            data.addColumn('number', '4');
            data.addColumn('number', '5');
            data.addColumn('number', '6');
            data.addColumn('number', '7');
            data.addColumn('number', '8');
            data.addColumn('number', '9');
            data.addColumn('number', '10');
            data.addColumn('number', '11');
            data.addColumn('number', '12');
            data.addColumn('number', '13');
            data.addColumn('number', '14');
            data.addColumn('number', '15');
            data.addColumn('number', '16');
            data.addColumn('number', '17');
            data.addColumn('number', '18');
            data.addColumn('number', '19');
            data.addColumn('number', '20');

            data.addRows(benchmark);

            options = {
                vAxis: {
                    title: 'E(n,r)'
                },
                width: 1347,
                height: 500

            };

            chart = new google.charts.Line(document.getElementById('chart3'));
            chart.draw(data, google.charts.Line.convertOptions(options));

            benchmark = [];
            for (n = 1; n < 31; n++) {
                benchmark[n - 1] = new Array();
                benchmark[n - 1].push(n);
                for (m = 1; m < 21; m++) {
                    A = RBenchmark[m - 1][0];
                    B = RBenchmark[m - 1][1];
                    C = [];

                    Tn = 0;
                    T1 = 0;
                    Knr = 0;
                    Enr = 0;
                    Dnr = 0;
                    calculateResult();
                    calculateEnr();
                    benchmark[n - 1].push(Enr);
                }
            }

            data = new google.visualization.DataTable();
            data.addColumn('number', 'n');
            data.addColumn('number', '1');
            data.addColumn('number', '2');
            data.addColumn('number', '3');
            data.addColumn('number', '4');
            data.addColumn('number', '5');
            data.addColumn('number', '6');
            data.addColumn('number', '7');
            data.addColumn('number', '8');
            data.addColumn('number', '9');
            data.addColumn('number', '10');
            data.addColumn('number', '11');
            data.addColumn('number', '12');
            data.addColumn('number', '13');
            data.addColumn('number', '14');
            data.addColumn('number', '15');
            data.addColumn('number', '16');
            data.addColumn('number', '17');
            data.addColumn('number', '18');
            data.addColumn('number', '19');
            data.addColumn('number', '20');

            data.addRows(benchmark);

            options = {
                vAxis: {
                    title: 'E(n,r)'
                },
                width: 1347,
                height: 500

            };

            chart = new google.charts.Line(document.getElementById('chart4'));
            chart.draw(data, google.charts.Line.convertOptions(options));

            benchmark = [];
            m = 31;
            A = [];
            B = [];
            generateData();
            for (m = 1; m < 21; m++) {
                benchmark[m - 1] = new Array();
                benchmark[m - 1].push(m);
                for (n = 1; n < 21; n++) {
                    C = [];
                    L = 0;
                    Tn = 0;
                    T1 = 0;
                    Knr = 0;
                    Enr = 0;
                    Dnr = 0;
                    totalRang = m * 2 * p * q;
                    calculateResult();
                    calculateD();
                    benchmark[m - 1].push(D);
                }
            }

            data = new google.visualization.DataTable();
            data.addColumn('number', 'r');
            data.addColumn('number', '1');
            data.addColumn('number', '2');
            data.addColumn('number', '3');
            data.addColumn('number', '4');
            data.addColumn('number', '5');
            data.addColumn('number', '6');
            data.addColumn('number', '7');
            data.addColumn('number', '8');
            data.addColumn('number', '9');
            data.addColumn('number', '10');
            data.addColumn('number', '11');
            data.addColumn('number', '12');
            data.addColumn('number', '13');
            data.addColumn('number', '14');
            data.addColumn('number', '15');
            data.addColumn('number', '16');
            data.addColumn('number', '17');
            data.addColumn('number', '18');
            data.addColumn('number', '19');
            data.addColumn('number', '20');

            data.addRows(benchmark);

            options = {
                vAxis: {
                    title: 'D(n,r)'
                },
                width: 1347,
                height: 500

            };

            chart = new google.charts.Line(document.getElementById('chart5'));

            chart.draw(data, google.charts.Line.convertOptions(options));
            benchmark = [];
            for (n = 1; n < 51; n++) {
                benchmark[n - 1] = new Array();
                benchmark[n - 1].push(n);
                for (m = 1; m < 21; m++) {
                    A = RBenchmark[m - 1][0];
                    B = RBenchmark[m - 1][1];
                    C = [];

                    L = 0;
                    Tn = 0;
                    T1 = 0;
                    Knr = 0;
                    Enr = 0;
                    Dnr = 0;
                    totalRang = m * 2 * p * q;
                    calculateResult();
                    calculateD();
                    benchmark[n - 1].push(D);
                }
            }

            data = new google.visualization.DataTable();
            data.addColumn('number', 'n');
            data.addColumn('number', '1');
            data.addColumn('number', '2');
            data.addColumn('number', '3');
            data.addColumn('number', '4');
            data.addColumn('number', '5');
            data.addColumn('number', '6');
            data.addColumn('number', '7');
            data.addColumn('number', '8');
            data.addColumn('number', '9');
            data.addColumn('number', '10');
            data.addColumn('number', '11');
            data.addColumn('number', '12');
            data.addColumn('number', '13');
            data.addColumn('number', '14');
            data.addColumn('number', '15');
            data.addColumn('number', '16');
            data.addColumn('number', '17');
            data.addColumn('number', '18');
            data.addColumn('number', '19');
            data.addColumn('number', '20');

            data.addRows(benchmark);

            options = {
                vAxis: {
                    title: 'D(n,r)'
                },
                width: 1347,
                height: 500

            };

            chart = new google.charts.Line(document.getElementById('chart6'));
            chart.draw(data, google.charts.Line.convertOptions(options));

        }

    }

}



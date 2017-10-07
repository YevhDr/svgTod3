// function click(data) {
//
//     d3.selectAll("div.maptips").remove();
//
//     var div = d3.select("body").append("div")
//         .attr("class", "maptips")
//         .style("left", (d3.event.pageX - 50) + "px")
//         .style("top", (d3.event.pageY + 10) + "px")
//         .html("<span style='color:white; background-color:#8e8f91; padding:5px; font-size: 15px; line-height: 1.5em' >" + "<b>" + data[2].region + " область" + "</b>" + "<span>");
//
//
//     data.forEach(function (d) {
//
//         d.councillors = +d.councillors;
//
//         if (d.councillors <= 5) {
//             var fontSize = "10px"
//         } else if (d.councillors > 5 && d.councillors < 25 ) {
//             var fontSize = "15px"
//         }
//         else if (d.councillors >= 25 && d.councillors < 50) {
//             var fontSize = "25px"
//         } else if (d.councillors >= 50) {
//             var fontSize = "50px"
//         }
//
// //          var fontSize = d.councillors + "px";
//
//
//         div.append("p")
//             .html(d.fullname)
//             .style("font-size", fontSize)
//             .attr("line-height", "1em !important");
//
// //            var tip = d3.tip()
// //                .attr('class', 'd3-tip')
// //                .html(d.fullname)
// //                .style("font-size", fontSize * 10);
//
//         var svgMap = d3.select("svg");
//
//
// //            svg.call(tip);
// //            tip.show();
//
//
//     });
//
//
// }
//
//
//
// d3.csv("data/facets.csv", function (error, data) {
//     if (error) {
//         throw error
//     }
//
//
//     d3.xml("svg/test2.svg").mimeType("image/svg+xml").get(function (error, xml) {
//         if (error) {
//             throw error
//         }
//
//
//         d3.select("#myshape").node().appendChild(xml.documentElement);
//
//         var svgMap = d3.select("#myshape svg");
//
//
//         var maptips = d3.select("body").append("div")
//             .attr("class", "maptips")
//             .style("opacity", 0);
//
//         var districts = svgMap.selectAll("g#oblast")
//             .each(function () {
//                 d3.select(this)
//                     .datum(function () {
//                         var gClass = this.classList.value;
//                         return data.filter(function (d) {
//                             return d.key === gClass;
//                         });
//                     })
//                     .on("click", click);
//             });
//
//         svgMap.attr("width", "80%");
//         svgMap.attr("height", "300px");
//
//         // var width = 1900;
//         // var aspectRatio = 10.0 / 1.0;
//         // var height = width / aspectRatio / 20;
//         //
//         // svgMap.attr('viewBox', '0 0 ' + width + ' ' + height)
//     });
// });
//
//

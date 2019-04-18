import React, { Component } from 'react'
import '../App.css'
import * as d3 from 'd3'

class BarChart extends Component {
    constructor(props) {
        super(props)
        this.createD3Viz = this.createD3Viz.bind(this)
    }
    componentDidMount() {
        this.createD3Viz()
    }
    componentDidUpdate() {
        this.createD3Viz()
    }
    createD3Viz() {
        var el = 'sankey';
        var width = 1400;
        var height = 400;
        var margin = {
            top: 100,
            right: 0,
            bottom: 0,
            left: 100
        };
        var product = {
            //nodes：first：  第一次出现 
            //       pos：    在第几列(年)
            //links：groupID：第几个国家
            //       source、target：点序号
            nodes: [
                { name: "Iraq", term: "Iraq", w: 1137, pos: 1, first: true },
                { name: "Iraq", term: "Iraq", w: 1179, pos: 2 },
                { name: "Iraq", term: "Iraq", w: 1308, pos: 3 },
                { name: "Iraq", term: "Iraq", w: 1437, pos: 4 },
                { name: "Iraq", term: "Iraq", w: 2849, pos: 5 },
                { name: "Iraq", term: "Iraq", w: 3926, pos: 6 },
                { name: "Iraq", term: "Iraq", w: 2744, pos: 7 },
                { name: "Iraq", term: "Iraq", w: 3356, pos: 8 },
                { name: "Pakistan", term: "Pakistan", w: 667, pos: 1, first: true },
                { name: "Pakistan", term: "Pakistan", w: 713, pos: 2 },
                { name: "Pakistan", term: "Pakistan", w: 1012, pos: 3 },
                { name: "Pakistan", term: "Pakistan", w: 1652, pos: 4 },
                { name: "Pakistan", term: "Pakistan", w: 2214, pos: 5 },
                { name: "Pakistan", term: "Pakistan", w: 2148, pos: 6 },
                { name: "Pakistan", term: "Pakistan", w: 1238, pos: 7 },
                { name: "Pakistan", term: "Pakistan", w: 861, pos: 8 },
                { name: "Afghanistan", term: "Afghanistan", w: 502, pos: 1, first: true },
                { name: "Afghanistan", term: "Afghanistan", w: 541, pos: 2 },
                { name: "Afghanistan", term: "Afghanistan", w: 421, pos: 3 },
                { name: "Afghanistan", term: "Afghanistan", w: 1468, pos: 4 },
                { name: "Afghanistan", term: "Afghanistan", w: 1441, pos: 5 },
                { name: "Afghanistan", term: "Afghanistan", w: 1821, pos: 6 },
                { name: "Afghanistan", term: "Afghanistan", w: 1927, pos: 7 },
                { name: "Afghanistan", term: "Afghanistan", w: 1615, pos: 8 },
                { name: "India", term: "India", w: 672, pos: 1, first: true },
                { name: "India", term: "India", w: 661, pos: 2 },
                { name: "India", term: "India", w: 644, pos: 3 },
                { name: "India", term: "India", w: 611, pos: 4 },
                { name: "India", term: "India", w: 694, pos: 5 },
                { name: "India", term: "India", w: 860, pos: 6 },
                { name: "India", term: "India", w: 883, pos: 7 },
                { name: "India", term: "India", w: 1019, pos: 8 },
                { name: "Philippines", term: "Philippines", w: 230, pos: 1, first: true },
                { name: "Philippines", term: "Philippines", w: 205, pos: 2 },
                { name: "Philippines", term: "Philippines", w: 149, pos: 3 },
                { name: "Philippines", term: "Philippines", w: 248, pos: 4 },
                { name: "Philippines", term: "Philippines", w: 651, pos: 5 },
                { name: "Philippines", term: "Philippines", w: 596, pos: 6 },
                { name: "Philippines", term: "Philippines", w: 720, pos: 7 },
                { name: "Philippines", term: "Philippines", w: 633, pos: 8 },
                { name: "Yemen", term: "Yemen", w: 23, pos: 1, first: true },
                { name: "Yemen", term: "Yemen", w: 112, pos: 2 },
                { name: "Yemen", term: "Yemen", w: 118, pos: 3 },
                { name: "Yemen", term: "Yemen", w: 312, pos: 4 },
                { name: "Yemen", term: "Yemen", w: 424, pos: 5 },
                { name: "Yemen", term: "Yemen", w: 761, pos: 6 },
                { name: "Yemen", term: "Yemen", w: 658, pos: 7 },
                { name: "Yemen", term: "Yemen", w: 521, pos: 8 },
                { name: "Thailand", term: "Thailand", w: 298, pos: 1, first: true },
                { name: "Thailand", term: "Thailand", w: 253, pos: 2 },
                { name: "Thailand", term: "Thailand", w: 182, pos: 3 },
                { name: "Thailand", term: "Thailand", w: 279, pos: 4 },
                { name: "Thailand", term: "Thailand", w: 472, pos: 5 },
                { name: "Thailand", term: "Thailand", w: 423, pos: 6 },
                { name: "Thailand", term: "Thailand", w: 277, pos: 7 },
                { name: "Thailand", term: "Thailand", w: 329, pos: 8 },
                { name: "Syria", term: "Syria", w: 49, pos: 3, first: true },
                { name: "Syria", term: "Syria", w: 180, pos: 4 },
                { name: "Syria", term: "Syria", w: 281, pos: 5 },
                { name: "Syria", term: "Syria", w: 328, pos: 6 },
                { name: "Syria", term: "Syria", w: 490, pos: 7 },
                { name: "Syria", term: "Syria", w: 472, pos: 8 },
                { name: "Egypt", term: "Egypt", w: 2, pos: 1, first: true },
                { name: "Egypt", term: "Egypt", w: 2, pos: 2 },
                { name: "Egypt", term: "Egypt", w: 18, pos: 3 },
                { name: "Egypt", term: "Egypt", w: 49, pos: 4 },
                { name: "Egypt", term: "Egypt", w: 315, pos: 5 },
                { name: "Egypt", term: "Egypt", w: 347, pos: 6 },
                { name: "Egypt", term: "Egypt", w: 582, pos: 7 },
                { name: "Egypt", term: "Egypt", w: 365, pos: 8 },
                { name: "Ukraine", term: "Ukraine", w: 2, pos: 1, first: true },
                { name: "Ukraine", term: "Ukraine", w: 4, pos: 2 },
                { name: "Ukraine", term: "Ukraine", w: 3, pos: 3 },
                { name: "Ukraine", term: "Ukraine", w: 8, pos: 4 },
                { name: "Ukraine", term: "Ukraine", w: 5, pos: 5 },
                { name: "Ukraine", term: "Ukraine", w: 898, pos: 6 },
                { name: "Ukraine", term: "Ukraine", w: 637, pos: 7 },
                { name: "Ukraine", term: "Ukraine", w: 60, pos: 8 },
            ],
            links: [
                { source: 0, target: 1, w1: 1137, w2: 1179, groupID: 1 },
                { source: 1, target: 2, w1: 1179, w2: 1308, groupID: 1 },
                { source: 2, target: 3, w1: 1308, w2: 1437, groupID: 1 },
                { source: 3, target: 4, w1: 1437, w2: 2849, groupID: 1 },
                { source: 4, target: 5, w1: 2849, w2: 3926, groupID: 1 },
                { source: 5, target: 6, w1: 3926, w2: 2744, groupID: 1 },
                { source: 6, target: 7, w1: 2744, w2: 3356, groupID: 1 },
                { source: 8, target: 9, w1: 667, w2: 713, groupID: 2 },
                { source: 9, target: 10, w1: 713, w2: 1012, groupID: 2 },
                { source: 10, target: 11, w1: 1012, w2: 1652, groupID: 2 },
                { source: 11, target: 12, w1: 1652, w2: 2214, groupID: 2 },
                { source: 12, target: 13, w1: 2214, w2: 2148, groupID: 2 },
                { source: 13, target: 14, w1: 2148, w2: 1238, groupID: 2 },
                { source: 14, target: 15, w1: 1238, w2: 861, groupID: 2 },
                { source: 16, target: 17, w1: 502, w2: 541, groupID: 3 },
                { source: 17, target: 18, w1: 541, w2: 421, groupID: 3 },
                { source: 18, target: 19, w1: 421, w2: 1468, groupID: 3 },
                { source: 19, target: 20, w1: 1468, w2: 1441, groupID: 3 },
                { source: 20, target: 21, w1: 1441, w2: 1821, groupID: 3 },
                { source: 21, target: 22, w1: 1821, w2: 1927, groupID: 3 },
                { source: 22, target: 23, w1: 1927, w2: 1615, groupID: 3 },
                { source: 24, target: 25, w1: 672, w2: 661, groupID: 4 },
                { source: 25, target: 26, w1: 661, w2: 644, groupID: 4 },
                { source: 26, target: 27, w1: 644, w2: 611, groupID: 4 },
                { source: 27, target: 28, w1: 611, w2: 694, groupID: 4 },
                { source: 28, target: 29, w1: 694, w2: 860, groupID: 4 },
                { source: 29, target: 30, w1: 860, w2: 883, groupID: 4 },
                { source: 30, target: 31, w1: 883, w2: 1019, groupID: 4 },
                { source: 32, target: 33, w1: 230, w2: 205, groupID: 5 },
                { source: 33, target: 34, w1: 205, w2: 149, groupID: 5 },
                { source: 34, target: 35, w1: 149, w2: 248, groupID: 5 },
                { source: 35, target: 36, w1: 248, w2: 651, groupID: 5 },
                { source: 36, target: 37, w1: 651, w2: 596, groupID: 5 },
                { source: 37, target: 38, w1: 596, w2: 720, groupID: 5 },
                { source: 38, target: 39, w1: 720, w2: 633, groupID: 5 },
                { source: 40, target: 41, w1: 23, w2: 112, groupID: 6 },
                { source: 41, target: 42, w1: 112, w2: 118, groupID: 6 },
                { source: 42, target: 43, w1: 118, w2: 312, groupID: 6 },
                { source: 43, target: 44, w1: 312, w2: 424, groupID: 6 },
                { source: 44, target: 45, w1: 424, w2: 761, groupID: 6 },
                { source: 45, target: 46, w1: 761, w2: 658, groupID: 6 },
                { source: 46, target: 47, w1: 658, w2: 521, groupID: 6 },
                { source: 48, target: 49, w1: 298, w2: 253, groupID: 7 },
                { source: 49, target: 50, w1: 253, w2: 182, groupID: 7 },
                { source: 50, target: 51, w1: 182, w2: 279, groupID: 7 },
                { source: 51, target: 52, w1: 279, w2: 472, groupID: 7 },
                { source: 52, target: 53, w1: 472, w2: 423, groupID: 7 },
                { source: 53, target: 54, w1: 423, w2: 277, groupID: 7 },
                { source: 54, target: 55, w1: 277, w2: 329, groupID: 7 },
                { source: 56, target: 57, w1: 49, w2: 180, groupID: 8 },
                { source: 57, target: 58, w1: 180, w2: 281, groupID: 8 },
                { source: 58, target: 59, w1: 281, w2: 328, groupID: 8 },
                { source: 59, target: 60, w1: 328, w2: 490, groupID: 8 },
                { source: 60, target: 61, w1: 490, w2: 472, groupID: 8 },
                { source: 62, target: 63, w1: 2, w2: 2, groupID: 8 },
                { source: 63, target: 64, w1: 2, w2: 18, groupID: 8 },
                { source: 64, target: 65, w1: 18, w2: 49, groupID: 8 },
                { source: 65, target: 66, w1: 49, w2: 315, groupID: 8 },
                { source: 66, target: 67, w1: 315, w2: 347, groupID: 8 },
                { source: 67, target: 68, w1: 347, w2: 582, groupID: 8 },
                { source: 68, target: 69, w1: 582, w2: 365, groupID: 8 },
                { source: 70, target: 71, w1: 2, w2: 4, groupID: 9 },
                { source: 71, target: 72, w1: 4, w2: 3, groupID: 9 },
                { source: 72, target: 73, w1: 3, w2: 8, groupID: 9 },
                { source: 73, target: 74, w1: 8, w2: 5, groupID: 9 },
                { source: 74, target: 75, w1: 5, w2: 898, groupID: 9 },
                { source: 75, target: 76, w1: 898, w2: 637, groupID: 9 },
                { source: 76, target: 77, w1: 637, w2: 60, groupID: 9 },
            ]
        };
        var dataNodes = product.nodes;
        var dataLinks = product.links;
        // set color formate
        var formatNumber = d3.format(",.0f"), //decimal places
            format = function (d) {
                return formatNumber(d) + "";
            },
            color = d3.scaleOrdinal(d3.schemeCategory20);

        //  set svg container
        var svg = d3.select("#" + el).append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom);

        var sankey = {},
            nodeWidth = 0,
            nodePadding = 8,
            nodeOffset = 100,
            size = [1, 1],
            nodes = [],
            links = [],
            items = [];

        sankey.nodeWidth = function (_) {
            if (!arguments.length) return nodeWidth;
            nodeWidth = +_;
            return sankey;
        };
        sankey.nodePadding = function (_) {
            if (!arguments.length) return nodePadding;
            nodePadding = +_;
            return sankey;
        };
        sankey.nodeOffset = function (_) {
            if (!arguments.length) return nodeOffset;
            nodeOffset = +_;
            return sankey;
        };
        sankey.nodes = function (_) {
            if (!arguments.length) return nodes;
            nodes = _;
            return sankey;
        };
        sankey.links = function (_) {
            if (!arguments.length) return links;
            links = _;
            return sankey;
        };
        sankey.size = function (_) {
            if (!arguments.length) return size;
            size = _;
            return sankey;
        };

        sankey.nodeWidth(0)
            .nodePadding(15)
            .size([width, height]);

        sankey.layout = function (iterations) { ////jixiangyu   the algorithm
            computeNodeLinks(); ///////transform the link value to node objet
            computeNodeValues(); //////set the weight of each node
            computeNodeBreadths(); //////the X cordinate of every nodes
            computeNodeDepths_minimum_jixy(iterations); /////algo:  the order:pos   cordinates : y
            computeLinkDepths(); ////vertical y cordinates of the link/nodes
            computeItemNode();
            return sankey;
        };
        sankey.nodes(dataNodes)
            .links(dataLinks)
            .layout(32);

        sankey.link = function () {
            var curvature = .5;

            function link(d) {
                var x0 = d.source.x + d.source.dx,
                    x1 = d.target.x,
                    xi = d3.interpolateNumber(x0, x1),
                    xj = d3.interpolateNumber(x1, x0),
                    x2 = xi(curvature),
                    x3 = xi(1 - curvature),
                    x4 = xj(curvature),
                    x5 = xj(1 - curvature);
                var y0_top = d.source.y + d.sy; //右左下
                var y0_bottom = d.source.y + d.sy + d.dy1, //右左下
                    y1_top = d.target.y + d.ty; // + d.ty;右右下
                var y1_bottom = d.target.y + d.ty + d.dy2;
                return "M" + x0 + "," + y0_top +
                    "C" + x2 + "," + y0_top +
                    " " + x3 + "," + y1_top +
                    " " + x1 + "," + y1_top +
                    "L" + x1 + "," + y1_bottom +
                    "C" + x4 + "," + y1_bottom +
                    " " + x5 + "," + y0_bottom +
                    " " + x0 + "," + y0_bottom +
                    "L" + x0 + "," + y0_top;
            }

            link.curvature = function (_) {
                if (!arguments.length) return curvature;
                curvature = +_;
                return link;
            };

            return link;
        };
        var path = sankey.link();

        // set link
        var link = svg.append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
            .append("g")
            .attr("class", "link")
            .selectAll(".link")
            .data(dataLinks);

        link.enter()
            .append("path")
            .attr("d", path)
            .attr("stroke", function (d) {
                return d.color = color(d.source.name.replace(/ .*/, ""));
            })
            .style("stroke-width", function (d) {
                // return Math.max(1, d.dy);
                return d.dy;
            })
            .style("fill-opacity", 0.6)
            .style("fill", function (d) {
                return d.color = color(d.source.name.replace(/ .*/, ""));
            })
            .append("title")
            .text(function (d) {
                return d.source.name + "\n" + format(d.source.value) + "->" + format(d.target.value);
            });


        var node = svg.append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
            .append("g")
            .attr("class", "node")
            .selectAll(".node")
            .data(dataNodes);

        node.enter()
            .append("g")
            .append("text")
            .attr('x', function (d) {
                var nw = textSize("16px", "Arial", d.name).width;
                return d.x - nw - 10;
            })
            .attr('y', function (d) {
                var nh = textSize("16px", "Arial", d.name).height;
                return d.y + d.dy / 2 + nh / 4;
            })
            .style("fill", function (d) {
                return d.color = color(d.name.replace(/ .*/, ""));
            })
            .style('font-size', 16)
            .style('font-family', "arial")
            .text(function (d) {
                if (d.first === true) {
                    return d.name;
                }
            });

        //计算文字显示宽高
        function textSize(fontSize, fontFamily, text) {
            var span = document.createElement("span");
            var result = {};
            result.width = span.offsetWidth;
            result.height = span.offsetHeight;
            span.style.visibility = "hidden";
            span.style.fontSize = fontSize;
            span.style.fontFamily = fontFamily;
            span.style.display = "inline-block";
            document.body.appendChild(span);
            if (typeof span.textContent !== "undefined") {
                span.textContent = text;
            } else {
                span.innerText = text;
            }
            result.width = parseFloat(window.getComputedStyle(span).width) - result.width;
            result.height = parseFloat(window.getComputedStyle(span).height) - result.height;
            var parent = span.parentNode;
            parent.removeChild(span);
            return result;
        }

        //添加时间刻度线
        timeLine();
        function timeLine() {
            var x = 200,
                y1 = 0,
                y2 = 600,
                text = 2009;
            var axis = svg.append('g').attr('class', 'axis');
            for (var i = 0; i < 8; i++) {
                var line = axis.append('g').attr('class', text);
                line.append('svg:line')
                    .attr('x1', x)
                    .attr('x2', x)
                    .attr('y1', y1)
                    .attr('y2', y2)
                    .style('stroke', 'lightgray')
                    .style('stroke-width', 1);

                line.append('text')
                    .attr('x', (x - 6))
                    .attr('y', (y1 + 30))
                    .attr('dy', '.0em')
                    .attr('text-anchor', 'end')
                    .attr('font-weight', 'bold')
                    .text(text)

                x = x + 100
                text = text + 1
            }
        }

        function computeNodeLinks() {
            nodes.forEach(function (node) {
                node.sourceLinks = [];
                node.targetLinks = [];
            });
            links.forEach(function (link) {
                var source = link.source,
                    target = link.target;
                link.source_index = source;
                link.target_index = target;
                if (typeof source === "number") source = link.source = nodes[link.source];
                if (typeof target === "number") target = link.target = nodes[link.target];
                source.sourceLinks.push(link); /////the link in which node as souce/link
                target.targetLinks.push(link);
            });
        }
        function computeNodeValues() {
            nodes.forEach(function (node) {
                node.value = node.w;
                // node.value = Math.max(
                //   d3.sum(node.sourceLinks, value),
                //   d3.sum(node.targetLinks, value)
                // );
            });
        }
        function computeItemNode() {
            items.forEach(function (item) {
                item.node.forEach(function (node) {
                    node = {};
                    node.cluster = nodes[node];
                })
                item.start.node_id = item.start.node;
                item.start.node = nodes[item.start.node_id];
            })

        }
        function computeNodeBreadths() {

            nodes.forEach(function (node) {
                node.x = node.pos * nodeOffset; ////pos is in the Json data  jixiangyu

                //test++;

                node.dx = nodeWidth;
            });

            // while (remainingNodes.length) {
            //   nextNodes = [];
            //   remainingNodes.forEach(function(node) {
            //     node.x = x;
            //     node.dx = nodeWidth;
            //     node.sourceLinks.forEach(function(link) {
            //       nextNodes.push(link.target);
            //     });
            //   });
            //   remainingNodes = nextNodes;
            //   ++x;
            // }

            //
            // moveSinksRight(x);
            // scaleNodeBreadths((width - nodeWidth) / (x - 1));
        }
        function computeNodeDepths_minimum_jixy(iterations) {
            var nodesByBreadth = d3.nest() //////jixiangyu   nest? initialize the group sort
                .key(function (d) {
                    return d.x;
                }) /////group by x-cordinate
                .sortKeys(d3.ascending)
                .entries(nodes)
                .map(function (d) {
                    return d.values;
                });

            initializeNodeDepth();
            resolveCollisions();

            function initializeNodeDepth() {
                var ky = d3.min(nodesByBreadth, function (nodes) {
                    return (size[1] - (nodes.length - 1) * nodePadding) / d3.sum(nodes, value);
                });

                nodesByBreadth.forEach(function (nodes) {
                    nodes.forEach(function (node, i) {
                        node.y = (size[1] / 2) - node.w;
                        //node.dy=80;

                        ///console.log(node.y);
                        node.dy = node.value * ky; ///height of every node

                        //median_value();  jixiangyu

                        //
                    });
                });

                links.forEach(function (link) {
                    // link.dy = link.value * ky;
                    link.dy1 = link.source.w * link.w1 * ky / (d3.sum(link.source.sourceLinks, weight1) + 0.01);
                    link.dy2 = link.target.w * link.w2 * ky / (d3.sum(link.target.targetLinks, weight2) + 0.01);
                });
            }
            function resolveCollisions() {
                nodesByBreadth.forEach(function (nodes) {
                    var node,
                        dy,
                        y0 = 0,
                        n = nodes.length,
                        i;

                    // Push any overlapping nodes down.
                    nodes.sort(ascendingDepth);
                    for (i = 0; i < n; ++i) {
                        node = nodes[i];
                        dy = y0 - node.y;
                        if (dy > 0) node.y += dy;
                        y0 = node.y + node.dy + nodePadding;
                    }

                    // If the bottommost node goes outside the bounds, push it back up.
                    dy = y0 - nodePadding - size[1];
                    if (dy > 0) {
                        y0 = node.y -= dy;

                        // Push any overlapping nodes back up.
                        for (i = n - 2; i >= 0; --i) {
                            node = nodes[i];
                            dy = node.y + node.dy + nodePadding - y0;
                            if (dy > 0) node.y -= dy;
                            y0 = node.y;
                        }
                    }
                });
            }
            function ascendingDepth(a, b) {
                return a.y - b.y;
            }
        }
        function computeLinkDepths() {
            nodes.forEach(function (node) {
                node.sourceLinks.sort(ascendingTargetDepth);
                node.targetLinks.sort(ascendingSourceDepth);
            });
            nodes.forEach(function (node) {
                var sy = 0,
                    ty = 0;
                node.sourceLinks.forEach(function (link) {
                    link.sy = sy;
                    sy += link.dy1;
                });
                node.targetLinks.forEach(function (link) {
                    link.ty = ty;
                    ty += link.dy2;
                });
            });

            function ascendingSourceDepth(a, b) {
                return a.source.y - b.source.y;
            }

            function ascendingTargetDepth(a, b) {
                return a.target.y - b.target.y;
            }
        }
        function value(link) {
            return link.value;
        }
        function weight1(link) {
            return link.w1;
        }
        function weight2(link) {
            return link.w2;
        }
    }
    render() {
        return <div id="sankey"></div>
    }
}
export default BarChart
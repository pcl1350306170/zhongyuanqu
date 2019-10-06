var EchartsCreate = {
  // 数据 - 实有人口分析
  data_demographicAnalysis: {
    name: ['总数', '户籍人口', '流动人口', '留守人口'],
    total: [10200, 5800, 2600, 1800]
  },
  // 数据 - 事件月度变化情况
  data_MonthlyvariationOfEvents:{
    name: [1,2,3,4,5,6,7,8,9,10,11,12],
    value:[]
  },
  init () {
    const _this = this

    _this.createEchart_demographicAnalysis() //实有人口分析
    _this.createEchart_MonthlyvariationOfEvents() //事件月度变化情况
    _this.createEchart_EventClassificationStatistics() // 事件分类统计
    _this.createEchart_EventAreaStatistics() // 事件区域统计

    // 党建统计的进度条
    _this.create_partyStatistics()
  },
  // 创建图表 - 实有人口分析
  createEchart_demographicAnalysis () {
    const _this = this

    let opChart = echarts.init(document.getElementById('echart_demographicAnalysis'))

    let dataV = []
    let Colors = ['#06fffc','#ffa303','#01bf3f','#00a0e9']
    for(let i = 0 ; i < _this.data_demographicAnalysis['total'].length ; i++){
      let j = {
        value: _this.data_demographicAnalysis['total'][i],
        itemStyle:{
          color:Colors[i]
        }
      }
      dataV.push(j)
    }

    let chartOption = {
      backgroundColor: '',
      color: ['#0573fb'],
      grid: {
        left: '10px',
        top: '40px',
        right: '30px',
        bottom: 0,
        containLabel: true
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      xAxis: [
        {
          type: 'category',
          data: _this.data_demographicAnalysis['name'],
          axisTick: {
            alignWithLabel: false,
            show: false,
            inside: true
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#fff'
            }
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            interval: 0,
            margin: 12,
            color: '#f1f1f1',
            fontSize: '1.3vh'
          }
        }
      ],
      yAxis: [
        {
          name: '数量(条)',
          type: 'value',
          axisTick: {
            alignWithLabel: false,
            show: false,
            inside: true
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#fff'
            }
          },
          axisLabel: {
            show: true
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: ['rgba(255,255,255,0.3)']
            }
          }
        }
      ],
      series: [
        {
          type: 'bar',
          barWidth: '40%',
          data: dataV
        }
      ]
    }
    opChart.setOption(chartOption)
  },
  // 创建图表 - 事件月度变化情况
  createEchart_MonthlyvariationOfEvents(){
    const _this = this

    let opChart = echarts.init(document.getElementById('echart_MonthlyvariationOfEvents'))
    let chartOption = {
      legend: {
        data: ['上报数', '办结数'],
        textStyle: {
          color: '#ffffff'
        },
        itemWidth: 15,
        itemHeight: 15,
        itemGap: 20
      },
      grid: {
        top: 20,
        right: 20,
        bottom: 0,
        left: 0,
        containLabel: true
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'line'
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: _this.data_MonthlyvariationOfEvents.name,
        axisLine: {
          lineStyle: {
            color: '#fff'
          }
        },
        axisTick: {
          alignWithLabel: false,
          show: false,
          inside: true
        }
      },
      yAxis: {
        type: 'value',
        splitLine: {
          show: false,
          lineStyle: {
            color: ['rgba(255,255,255,0.3)']
          }
        },
        axisLine: {
          lineStyle: {
            color: '#fff'
          }
        },
        axisTick: {
          alignWithLabel: false,
          show: false,
          inside: true
        }
      },
      series: [{
        name:'上报数',
        data: [20, 92, 1, 94,21,32,45,64,23,43,2,21],
        type: 'line',
        symbol: 'circle',
        symbolSize: 3,
        itemStyle: {
          normal: {
            color: '#91e3f7',
            label: {
              show: false,
              position: 'top',
              textStyle: {
                color: '#fff'
              }
            }
          }
        },
        lineStyle: {
          width: 2
        },
        areaStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0, color: 'rgba(34,145,27,0.3)' // 0% 处的颜色
            }, {
              offset: 1, color: 'rgba(34,145,27,0.3)' // 100% 处的颜色
            }]
          }
        },
        smooth: true
      },
        {
          name: '办结数',
          data: [23, 22, 11, 44, 51, 32, 15, 24, 33, 23, 32, 21],
          type: 'line',
          symbol: 'circle',
          symbolSize: 3,
          itemStyle: {
            normal: {
              color: '#2291e3',
              label: {
                show: false,
                position: 'top',
                textStyle: {
                  color: '#fff'
                }
              }
            }
          },
          lineStyle: {
            width: 2
          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0, color: 'rgba(34,145,27,0.3)' // 0% 处的颜色
              }, {
                offset: 1, color: 'rgba(34,145,27,0.3)' // 100% 处的颜色
              }]
            }
          },
          smooth: true
        }]
    }
    opChart.setOption(chartOption)
  },
  // 创建图表 - 事件分类统计
  createEchart_EventClassificationStatistics(){
    const _this = this

    let classifyCharts = echarts.init(document.getElementById('echart_EventClassificationStatistics'))
    let classifyOption = {
      backgroundColor: '',
      color: ['#0573fb'],
      grid: {
        left: '10px',
        top: '20px',
        right: '30px',
        bottom: 0,
        containLabel: true
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      xAxis: [
        {
          type: 'category',
          data: ['综治', '城管', '计生' , '安检', '环保', '环卫', '信访', '文化', '民政', '民生', '其他'],
          axisTick: {
            alignWithLabel: false,
            show: false,
            inside: true
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#fff'
            }
          },
          splitLine: {
            show: false
          },
          axisLabel: {
            interval: 0,
            margin: 12
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          axisTick: {
            show: false
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#fff'
            }
          },
          axisLabel: {
            show: true
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: ['rgba(255,255,255,0.3)']
            }
          }
        }
      ],
      series: [
        {
          type: 'bar',
          barWidth: '60%',
          data: [73, 78, 55,32,54,45,85,15,42,62,35],
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                offset: 0,
                color: '#f9e61c' // 0% 处的颜色
              }, {
                offset: 1,
                color: '#0bd7a1' // 100% 处的颜色
              }], false),
              label: {
                show: true,
                position: 'top',
                textStyle: {
                  color: '#f3f410'
                }
              }
            }
          }
        }
      ]
    }
    classifyCharts.setOption(classifyOption)
  },
  // 创建图表 - 事件区域统计
  createEchart_EventAreaStatistics(){
    const _this = this

    let classifyCharts = echarts.init(document.getElementById('echart_EventAreaStatistics'))
    let classifyOption = {
      backgroundColor: '',
      grid: {
        left: '10px',
        top: '20px',
        right: '30px',
        bottom: 0,
        containLabel: true
      },
      xAxis: {
        type: 'value',
        boundaryGap: [0.4, 0.001],
        axisTick: {
          alignWithLabel: false,
          show: false,
          inside: true
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#fff'
          }
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          interval: 0,
          margin: 12
        }
      },
      yAxis: {
        type: 'category',
        data: ['乡镇1', '乡镇2', '乡镇3', '乡镇4', '乡镇5', '乡镇6', '乡镇7'],
        axisTick: {
          show: false
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: '#fff'
          }
        },
        axisLabel: {
          show: true
        },
        splitLine: {
          show: false,
          lineStyle: {
            color: ['rgba(255,255,255,0.3)']
          }
        }
      },
      series: [
        {
          name: '事件区域统计',
          type: 'bar',
          data: [52, 38, 65, 34, 44, 21, 45],
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                offset: 0,
                color: '#c802f5' // 0% 处的颜色
              }, {
                offset: 1,
                color: '#32e7ee' // 100% 处的颜色
              }], false),
              label: {
                show: true,
                position: 'right',
                textStyle: {
                  color: '#ffffff'
                }
              }
            }
          }
        }
      ]
    }
    classifyCharts.setOption(classifyOption)
  },
  // 党建统计的进度条
  create_partyStatistics() {
    let j1 = {
      canvas: 'partyStatistics_1', // 画板id
      rangeValue: 48 //进度数值
    }
    waveProgressBar.init(j1)

    let j2 = {
      canvas: 'partyStatistics_2', // 画板id
      rangeValue: 52 //进度数值
    }
    waveProgressBar.init(j2)

  }
}

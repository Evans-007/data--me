//index.js
//获取应用实例
import * as echarts from '../../ec-canvas/echarts';
function initChart(canvas, width, height, dpr) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // 像素
  });
  canvas.setChart(chart);
  var labelOption = {
    rich: {
      name: {
        textBorderColor: '#fff'
      }
    }
  };
  var option = {
    color: ["#37A2DA", "#67E0E3", "#9FE6B8"],
    legend: {
      data: ['A', 'B', 'C'],
      bottom: 10,
      left: 'center',
      backgroundColor: 'red',
      z: 100
    },
    grid: {
      containLabel: true,
        height: 91,
        top: 20,
        width: 380,
        left:0
    },
    tooltip: {
      show: true,
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [{
        value:  '0',
        textStyle: {
          fontSize: 10,
          padding: 0,
          margin: 0,
          width: 1
        }
      },
        {
          value:  '1',
          textStyle: {
            fontSize: 10
          }
        },
        {
          value:  '2',
          textStyle: {
            fontSize: 10
          }
        },
        {
          value:  '3',
          textStyle: {
            fontSize: 10
          }
        },
        {
          value: '4',
          textStyle: {
            fontSize: 10
          }
        },
        {
          value:  '5',
          textStyle: {
            fontSize: 10
          }
        },
        {
          value:  '6',
          textStyle: {
            fontSize: 10
          }
        },
        {
          value:  '7',
          textStyle: {
            fontSize: 10
          }
        },
        {
          value:  '8',
          textStyle: {
            fontSize: 10
          }
        },
        {
          value:  '9',
          textStyle: {
            fontSize: 10
          }
        },
        {
          value:  '10',
          textStyle: {
            fontSize: 10
          }
        },
        {
          value:  '11',
          textStyle: {
            fontSize: 10
          }
        },
        {
          value:  '12',
          textStyle: {
            fontSize: 10
          }
        },
        {
          value:  '13',
          textStyle: {
            fontSize: 10
          }
        },
        {
          value:  '14',
          textStyle: {
            fontSize: 10
          }
        },
        {
          value:  '15',
          textStyle: {
            fontSize: 10
          }
        },
        {
          value:  '16',
          textStyle: {
            fontSize: 10
          }
        },
        {
          value:  '17',
          textStyle: {
            fontSize: 10
          }
        },
        {
          value:  '18',
          textStyle: {
            fontSize: 10
          }
        },
        {
          value:  '19',
          textStyle: {
            fontSize: 10
          }
        },
        {
          value:  '20',
          textStyle: {
            fontSize: 10
          }
        },
        {
          value:  '21',
          textStyle: {
            fontSize: 10
          }
        },
        {
          value:  '22',
          textStyle: {
            fontSize: 10
          }
        },
        {
          value:  '23',
          textStyle: {
            fontSize: 10
          }
        }],
      max: 29,
      axisLabel: {
        interval: 0
      }
      // show: false
    },
    legend: {
      data: ['开店商家占比', '消费顾客占比'],
      bottom: 10
    },
    yAxis: {
      x: 'center',
      type: 'value',
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      },
      axisLabel: {
        show: true,
        interval: 'auto',
        formatter: '{value} %',
        fontSize: 10
      },
      interval: 25,
      // show: false
    },
    series: [
      {
        name: '开店商家占比',
        type: 'bar',
        barGap: 0,
        label: labelOption,
        data: [100, 30, 70, 90, 55, 66,100, 30, 70, 90, 55, 66,100, 30, 70, 90, 55, 66,100, 30, 70, 90, 55, 66],
        itemStyle: {
          color: "orange",
        },
        barWidth: 4,
        barGap: 0,
        barCategoryGap: 0
      },
      {
        name: '消费顾客占比',
        type: 'bar',
        label: labelOption,
        data: [25, 27, 29, 33, 45, 55, 56, 61,25, 27, 29, 33, 45, 55, 56, 61,25, 27, 29, 33, 45, 55, 56, 61],
        itemStyle: {
          color: "green",
        },
        barWidth: 4,
        barGap: 0,
        barCategoryGap: 0
      }
    ]
  };
  chart.setOption(option);
  return chart;
}

function initTrade(canvas, width, height, dpr) {
  const trade = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // 像素
  });
  canvas.setChart(trade);
  var labelOption = {
    rich: {
      name: {
        textBorderColor: '#fff'
      }
    }
  };
  var option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
       top: 20,
        width: '90%',
        height:40,
        containLabel: true
    },
    xAxis: [
        {
            type: 'value',
            axisTick: {
              show: false
          },
          show: false
        },
       
    ],
    yAxis: [
        {
            type: 'category',
            axisTick: {
                show: false
            },
            show: false
        }
    ],
    series: [
      {
        name: '收入',
        type: 'bar',
        stack: '总量',
        data: [73],
        barWidth: 10,
        itemStyle: {
          barBorderRadius: 10,
          color: '#2299ff'
        }
      },
      {
        name: '支出',
        type: 'bar',
        stack: '总量',
        data: [27],
        barWidth: 10,
        itemStyle: {
          barBorderRadius: 10,
          color: '#FF8400'
        }
      }
    ]
};
  trade.setOption(option);
  return trade;
}

function initShaky(canvas, width, height, dpr) {
  const trade = echarts.init(canvas, null, {
    width: width,
    height: height,
    devicePixelRatio: dpr // 像素
  });
  canvas.setChart(trade);
  var labelOption = {
    rich: {
      name: {
        textBorderColor: '#fff'
      }
    }
  };
  var option = {
    grid: {
      top: 20,
    },
    series: [
        {
            type: 'pie',
            radius: ['45%', '55%'],
            avoidLabelOverlap: false,
             label: {
                show: false,
                position: 'center'
            },
            data: [
                {value: 70,
                    itemStyle: {
                        color: '#ffd5d5'
                    }
                },
                {value: 30,
                    itemStyle: {
                        color:'#fb1c1c'
                    },
                    name: '报名率35%',
                }
            ],
            left: -65
        },
        {
            type: 'pie',
            radius: ['25%', '35%'],
            avoidLabelOverlap: false,
             label: {
                show: false,
                position: 'center'
            },
            data: [
                {value: 65,
                    itemStyle: {
                        color:'#fbbb21'
                    }
                },
                {value: 35, 
                    itemStyle: {
                        color:'#ff8400'
                    },
                    name: '通过率35%',
                }
            ],
            left: -65
        }
    ]
};
  trade.setOption(option);
  return trade;
}
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    ec: {
      onInit: initChart,
      disableTouch: true
    },
    tb: {
      onInit: initTrade
    },
    sk: {
      onInit: initShaky
    },
    bdisplay: 'block',
    fdsiplay: 'block',
    mdsiplay: 'block',
    current: 0
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
 
  onSlideChangeEnd: function (e) {
    

    this.setData({
      current: e.detail.current
    })
        
        
  },
  onLoad: function () {
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          clientHeight: res.windowHeight-177
        });
      }
    });
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})

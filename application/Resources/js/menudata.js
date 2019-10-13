/*菜单*/
const menulist = {
  GridMap:{
    name:'网格地图',
    icon:'./Resources/img/menu-icon1.png',
    children:{
      GridMap1:{
        name: '网格地图1',
        link:'http://localhost:8888/mine/html-css-1122/08-%e6%9c%80%e6%96%b0HTML5+CSS3+JavaScript%e5%ae%9e%e7%94%a8%e6%a1%88%e4%be%8b%e5%a4%a7%e5%85%a8%ef%bc%882181%e4%be%8b%ef%bc%89/10%e4%b8%aaCSS3%e5%8a%a8%e7%94%bb%e8%8f%9c%e5%8d%95/CSS3AnimationMenus/'
      },
      GridMap2: {
        name: '网格地图2',
        link: 'http://localhost:8888/mine/html-css-1122/08-%e6%9c%80%e6%96%b0HTML5+CSS3+JavaScript%e5%ae%9e%e7%94%a8%e6%a1%88%e4%be%8b%e5%a4%a7%e5%85%a8%ef%bc%882181%e4%be%8b%ef%bc%89/10%e6%ac%be%e5%8d%8e%e4%b8%bd%e7%9a%84SVG%20Loading%e5%8a%a0%e8%bd%bd%e5%8a%a8%e7%94%bb%e6%95%88%e6%9e%9c/'
      },
      GridMap3: {
        name: '网格地图3',
        children:{
          GridMap3_1:{
            name:'网格地图3-1',
            link: 'http://localhost:8888/mine/html-css-1122/08-%e6%9c%80%e6%96%b0HTML5+CSS3+JavaScript%e5%ae%9e%e7%94%a8%e6%a1%88%e4%be%8b%e5%a4%a7%e5%85%a8%ef%bc%882181%e4%be%8b%ef%bc%89/14%e4%b8%aa%e7%bb%bf%e8%89%b2CSS3%e5%8a%a0%e8%bd%bdLoading%e5%8a%a8%e7%94%bb%e7%89%b9%e6%95%88/'
          },
          GridMap3_2: {
            name: '网格地图3-1',
            link: 'http://localhost:8888/mine/html-css-1122/08-%e6%9c%80%e6%96%b0HTML5+CSS3+JavaScript%e5%ae%9e%e7%94%a8%e6%a1%88%e4%be%8b%e5%a4%a7%e5%85%a8%ef%bc%882181%e4%be%8b%ef%bc%89/15%e6%ac%becanvas%e6%97%b6%e9%92%9f%e7%89%b9%e6%95%88%e4%bb%a3%e7%a0%81/'
          },
          GridMap3_3: {
            name: '网格地图3-1',
            link: 'http://localhost:8888/mine/html-css-1122/08-%e6%9c%80%e6%96%b0HTML5+CSS3+JavaScript%e5%ae%9e%e7%94%a8%e6%a1%88%e4%be%8b%e5%a4%a7%e5%85%a8%ef%bc%882181%e4%be%8b%ef%bc%89/18%e6%ac%beanime.js%e6%96%87%e5%ad%97%e5%8a%a8%e7%94%bb%e7%89%b9%e6%95%88%e4%bb%a3%e7%a0%81/'
          }
        }
      },
      GridMap4: {
        name: '网格地图4',
        link: 'http://localhost:8888/mine/html-css-1122/08-%e6%9c%80%e6%96%b0HTML5+CSS3+JavaScript%e5%ae%9e%e7%94%a8%e6%a1%88%e4%be%8b%e5%a4%a7%e5%85%a8%ef%bc%882181%e4%be%8b%ef%bc%89/28%e4%b8%aa%e7%ba%afcss3%20%e5%8a%a0%e8%bd%bdloading%e5%8a%a8%e7%94%bb%e7%89%b9%e6%95%88/'
      }
    }
  },
  GridStaff:{
    name: '网格人员',
    icon: './Resources/img/menu-icon2.png',
    children: {}
  },
  SocialSentiment: {
    name: '社情民意',
    icon: './Resources/img/menu-icon3.png',
    children: {}
  },
  EventManagement: {
    name: '事件管理',
    icon: './Resources/img/menu-icon4.png',
    children: {
      EventList: {
        name: '事件列表',
        link: './EventManagement/EventList.html'
      },
      StreetEventStatistics: {
        name: '街道事件统计',
        link: './EventManagement/StreetEventStatistics.html'
      },
      CommunityEventStatistics: {
        name: '社区事件统计',
        link: './EventManagement/CommunityEventStatistics.html'
      },
      GridEventStatistics: {
        name: '网格事件统计',
        link: './EventManagement/EventList.html'
      },
      EventTypeStatistics: {
        name: '事件类型统计',
        link: './EventManagement/EventList.html'
      },
      EventStateStatistics: {
        name: '事件状态统计',
        link: './EventManagement/EventList.html'
      },
    }
  },
  TaskManagement: {
    name: '任务管理',
    icon: './Resources/img/menu-icon5.png',
    children: {}
  },
  LogManagement: {
    name: '日志管理',
    icon: './Resources/img/menu-icon6.png',
    children: {}
  }
}

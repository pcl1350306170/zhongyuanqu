/*菜单*/
const menulist = {
  GridMap:{
    name:'网格地图',
    icon:'./Resources/img/menu-icon1.png',
    children:{
      GridMap1:{
        name: '网格地图',
        icon: './Resources/img/menu-icon1.png',
        link:''
      },
      GridMap2: {
        name: '网格地图2',
        icon: './Resources/img/icons/leftmenu-icon1.png',
        link: 'https://www.processon.com/;jsessionid=40F840BFE5693C449A774161D64D69F3.jvm1'
      },
      GridMap3: {
        name: '网格地图3',
        icon: './Resources/img/icons/leftmenu-icon2.png',
        children:{
          GridMap3_1:{
            name:'网格地图3-1',
            link: 'https://blog.csdn.net/weixin_41382187/article/details/91866846'
          },
          GridMap3_2: {
            name: '网格地图3-1',
            link: 'https://blog.csdn.net/u013560932/article/details/88821150'
          },
          GridMap3_3: {
            name: '网格地图3-1',
            link: 'https://blog.csdn.net/weixin_40196539/article/details/81295596'
          }
        }
      },
      GridMap4: {
        name: '网格地图4',
        icon: './Resources/img/icons/leftmenu-icon3.png',
        link: 'https://bbs.csdn.net/topics/391868817'
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

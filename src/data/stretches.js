export const stretchesData = {
  shoulder: {
    name: '肩颈',
    icon: '👆',
    stretches: [
      {
        id: 1,
        name: '坐姿肩颈绕环',
        duration: 30,
        steps: [
          '坐直，双肩放松',
          '头部向左缓慢转动，直到看到左边肩膀',
          '继续向后转动，看到天花板',
          '转向右边，看到右边肩膀',
          '回到正前方，重复5次'
        ],
        tips: '动作要缓慢，不要用力过猛',
        image: 'shoulder-circle'
      },
      {
        id: 2,
        name: '侧颈拉伸',
        duration: 20,
        steps: [
          '坐直，左手放在右耳上方',
          '轻轻向左拉动头部，让右耳靠近右肩',
          '保持15秒，感受到右侧颈部拉伸',
          '换另一侧，重复动作'
        ],
        tips: '拉动力度要轻，避免用力过猛',
        image: 'neck-side'
      },
      {
        id: 3,
        name: '耸肩放松',
        duration: 15,
        steps: [
          '坐直，双肩自然下垂',
          '双肩向上耸起，靠近耳朵',
          '保持2秒，然后放松',
          '重复10次'
        ],
        tips: '耸起时吸气，放下时呼气',
        image: 'shoulder-shrug'
      }
    ]
  },
  back: {
    name: '腰背',
    icon: '💪',
    stretches: [
      {
        id: 4,
        name: '坐姿转腰',
        duration: 25,
        steps: [
          '坐直，双脚平放地面',
          '双手抱在胸前',
          '上半身缓慢向左转动',
          '保持5秒，感受腰部拉伸',
          '回到中间，向右转动，重复5次'
        ],
        tips: '转动时腰部发力，不要靠惯性',
        image: 'back-twist'
      },
      {
        id: 5,
        name: '坐姿前屈',
        duration: 30,
        steps: [
          '坐在椅子边缘，双脚分开与肩同宽',
          '上半身缓慢前倾，双手触摸脚尖',
          '保持10秒，感受后背拉伸',
          '慢慢回到坐姿，重复3次'
        ],
        tips: '动作要缓慢，避免过度前倾',
        image: 'forward-fold'
      },
      {
        id: 6,
        name: '坐姿后仰',
        duration: 20,
        steps: [
          '坐直，双手放在椅背边缘',
          '上半身缓慢后仰，抬头看天花板',
          '保持5秒，感受胸部和腰部拉伸',
          '慢慢回到坐姿，重复5次'
        ],
        tips: '后仰幅度不要过大，避免受伤',
        image: 'back-arch'
      }
    ]
  },
  wrist: {
    name: '手腕',
    icon: '🤚',
    stretches: [
      {
        id: 7,
        name: '手腕绕环',
        duration: 15,
        steps: [
          '伸出右手，掌心向下',
          '手腕缓慢做绕环动作',
          '顺时针绕5圈，逆时针绕5圈',
          '换左手，重复动作'
        ],
        tips: '动作幅度尽量大一些',
        image: 'wrist-circle'
      },
      {
        id: 8,
        name: '手腕拉伸',
        duration: 20,
        steps: [
          '伸出右手，掌心向外',
          '左手轻轻向内掰右手手指',
          '保持10秒，感受手腕拉伸',
          '换左手，重复动作'
        ],
        tips: '掰动力度要轻，避免拉伤',
        image: 'wrist-stretch'
      },
      {
        id: 9,
        name: '手指张开',
        duration: 10,
        steps: [
          '伸出双手，握拳',
          '用力张开手指，尽量伸直',
          '保持2秒，再次握拳',
          '重复10次'
        ],
        tips: '张开手指时要用力到位',
        image: 'finger-spread'
      }
    ]
  },
  leg: {
    name: '腿部',
    icon: '🦵',
    stretches: [
      {
        id: 10,
        name: '坐姿抬腿',
        duration: 30,
        steps: [
          '坐在椅子上，背部挺直',
          '抬起右腿，保持与地面平行',
          '保持10秒，感受大腿肌肉收紧',
          '放下右腿，换左腿，重复3次'
        ],
        tips: '抬腿时不要弯曲膝盖',
        image: 'leg-lift'
      },
      {
        id: 11,
        name: '脚踝绕环',
        duration: 20,
        steps: [
          '坐直，右脚离地',
          '脚踝做绕环动作',
          '顺时针绕10圈，逆时针绕10圈',
          '换左脚，重复动作'
        ],
        tips: '绕环时脚尖尽量画大圈',
        image: 'ankle-circle'
      },
      {
        id: 12,
        name: '小腿拉伸',
        duration: 25,
        steps: [
          '坐直，右脚脚后跟贴地',
          '脚尖向上翘起',
          '保持10秒，感受小腿拉伸',
          '换左脚，重复3次'
        ],
        tips: '翘脚尖时感受小腿肌肉拉伸',
        image: 'calf-stretch'
      }
    ]
  }
}

export const postureGuide = [
  {
    id: 1,
    category: '椅背调整',
    title: '利用靠垫调整坐姿',
    icon: '🪑',
    importance: '高',
    steps: [
      {
        title: '选择合适高度的椅子',
        description: '坐姿时双脚能够平放地面，大腿与小腿呈90度直角',
        image: 'chair-height'
      },
      {
        title: '腰靠位置',
        description: '使用腰靠垫在腰部下方，让脊柱保持自然弯曲，腰部得到支撑',
        image: 'lumbar-support'
      },
      {
        title: '椅背角度',
        description: '椅背微微后倾100-110度，比90度更利于腰椎健康',
        image: 'back-angle'
      }
    ],
    tips: [
      '如果椅子太矮，脚下垫几本书或调整桌腿',
      '腰靠垫不要太厚，3-5厘米即可',
      '避免长时间坐软沙发送类无支撑的椅子'
    ],
    commonMistakes: [
      '❌ 坐在椅子边缘，腰部无支撑',
      '❌ 椅子太高，脚悬空',
      '❌ 身体前倾看屏幕或书本'
    ]
  },
  {
    id: 2,
    category: '桌面高度',
    title: '桌面与手臂的关系',
    icon: '📚',
    importance: '高',
    steps: [
      {
        title: '理想桌面高度',
        description: '双臂自然垂下，前臂与桌面平行，肘部呈90度',
        image: 'desk-height'
      },
      {
        title: '书本位置',
        description: '将书本放在视线水平或稍低位置，避免长时间低头',
        image: 'book-position'
      },
      {
        title: '显示器高度',
        description: '如使用电脑，显示器上沿与视线水平，距离50-70厘米',
        image: 'screen-height'
      }
    ],
    tips: [
      '如果桌子太高，可以坐在较硬的垫子上',
      '低桌可以用书本将学习材料垫高',
      '保持下巴微收，不要伸头前伸'
    ],
    commonMistakes: [
      '❌ 桌子太高，手臂抬举看书',
      '❌ 桌子太低，长时间低头',
      '❌ 屏幕离眼睛太近或太远'
    ]
  },
  {
    id: 3,
    category: '身体姿态',
    title: '保持正确的身体姿态',
    icon: '🧘',
    importance: '中',
    steps: [
      {
        title: '脊柱自然曲线',
        description: '保持脊柱的S型自然弯曲，不要驼背或过度后仰',
        image: 'spine-curve'
      },
      {
        title: '肩膀放松',
        description: '双肩自然下沉，不要耸肩，避免肌肉紧张',
        image: 'shoulder-relax'
      },
      {
        title: '头部位置',
        description: '保持头部在中立位置，耳朵与肩膀在一条垂直线上',
        image: 'head-position'
      }
    ],
    tips: [
      '想象有一根线从头顶向上拉',
      '每30分钟检查一次坐姿',
      '肩膀感到酸痛时立刻调整'
    ],
    commonMistakes: [
      '❌ 长时间驼背看书',
      '❌ 头部前伸（乌龟颈）',
      '❌ 肩膀耸起，过度紧张'
    ]
  },
  {
    id: 4,
    category: '腿部位置',
    title: '腿部与脚部支撑',
    icon: '🦵',
    importance: '中',
    steps: [
      {
        title: '双脚平放',
        description: '双脚完全贴地，不要交叉或翘二郎腿',
        image: 'feet-flat'
      },
      {
        title: '膝盖位置',
        description: '膝盖与臀部同高或稍低，避免膝盖上翘',
        image: 'knee-height'
      },
      {
        title: '腿部空间',
        description: '大腿后侧不压在椅子边缘，留出活动空间',
        image: 'leg-space'
      }
    ],
    tips: [
      '如果椅子太深，可以在背后加个腰靠垫',
      '避免长时间翘二郎腿，会导致骨盆倾斜',
      '每隔30分钟活动一下腿部和脚踝'
    ],
    commonMistakes: [
      '❌ 长时间翘二郎腿',
      '❌ 脚悬空不落地',
      '❌ 大腿压在椅子边缘'
    ]
  },
  {
    id: 5,
    category: '自习室特殊技巧',
    title: '宿舍/自习室场景优化',
    icon: '🏫',
    importance: '高',
    steps: [
      {
        title: '利用书本调整',
        description: '用书本垫高学习材料，减少低头时间',
        image: 'book-adjust'
      },
      {
        title: '靠垫的使用',
        description: '用外套或书本做临时腰靠，给腰部提供支撑',
        image: 'cushion-use'
      },
      {
        title: '定时换位',
        description: '如果可能，每2-3小时换一个位置坐',
        image: 'change-seat'
      }
    ],
    tips: [
      '准备一个可折叠的小靠垫，随身携带',
      '选择有靠背的座位优先',
      '离开座位时伸展一下身体'
    ],
    commonMistakes: [
      '❌ 整天坐在同一个位置',
      '❌ 使用不合适的座位不调整',
      '❌ 忽略身体发出的不适信号'
    ]
  }
]

export const quickChecklist = [
  '双脚平放地面',
  '膝盖与臀部同高',
  '大腿与小腿90度',
  '腰部有支撑',
  '肩膀放松下垂',
  '耳朵与肩膀垂直',
  '书本在视线水平',
  '每30分钟调整一次'
]

export const painRelief = [
  {
    area: '腰部',
    causes: ['坐姿不当', '腰部无支撑', '久坐不动'],
    solutions: [
      '立即调整腰靠位置',
      '起立活动3-5分钟',
      '做坐姿转腰动作',
      '检查椅子高度'
    ]
  },
  {
    area: '肩颈',
    causes: ['长时间低头', '肩膀紧张', '前伸头部'],
    solutions: [
      '调整书本高度',
      '做肩颈绕环动作',
      '检查头部位置',
      '放松肩膀肌肉'
    ]
  },
  {
    area: '手腕',
    causes: ['书写姿势不当', '手腕过度弯曲', '长时间不动'],
    solutions: [
      '调整桌面高度',
      '做手腕绕环动作',
      '活动手指关节',
      '休息时伸展手臂'
    ]
  }
]

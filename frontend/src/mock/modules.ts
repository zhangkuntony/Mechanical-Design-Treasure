import type { Module } from '@/types/module'

/** 全部模块 Mock 数据 */
export const mockModules: Module[] = [
  {
    id: 'M01',
    name: '综合性工程工具',
    icon: 'toolbox',
    category: ['query', 'calculate'],
    sortIndex: 1,
    tools: [
      { id: 'T0101', moduleId: 'M01', name: '型材下料', icon: 'meterial-order', description: '常用工程材料下料计算', category: 'query', isPopular: true },
      { id: 'T0102', moduleId: 'M01', name: '材料计算', icon: 'material-calc', description: '常用工程材料参数计算', category: 'calculate' },
    ],
  },
  {
    id: 'M02',
    name: '实用功能',
    icon: 'utilities',
    category: ['utility'],
    sortIndex: 2,
    tools: [
      { id: 'T0201', moduleId: 'M02', name: '量角器', icon: 'protractor', description: '角度测量工具', category: 'utility', isPopular: true },
      { id: 'T0202', moduleId: 'M02', name: '直尺', icon: 'ruler', description: '长度测量工具', category: 'utility' },
      { id: 'T0203', moduleId: 'M02', name: '声音分贝测试', icon: 'decibel', description: '环境噪音分贝测量', category: 'utility', isPopular: true },
      { id: 'T0204', moduleId: 'M02', name: '运动轨迹检测', icon: 'trajectory', description: '物体运动轨迹分析', category: 'utility' },
      { id: 'T0205', moduleId: 'M02', name: '流水字', icon: 'stream-font', description: '流水字', category: 'utility' },
    ],
  },
  {
    id: 'M03',
    name: '液压系统',
    icon: 'hydraulic',
    category: ['calculate', 'query'],
    sortIndex: 3,
    tools: [
      { id: 'T0301', moduleId: 'M03', name: '缸径与推力', icon: 'cylinder-thrust', description: '液压缸缸径与输出推力计算', category: 'calculate', isPopular: true },
      { id: 'T0302', moduleId: 'M03', name: '系统特性曲线公差', icon: 'curve-tolerance', description: '液压系统特性曲线公差分析', category: 'calculate' },
      { id: 'T0303', moduleId: 'M03', name: '液压常用公式', icon: 'formula', description: '液压传动常用公式速查', category: 'query', isPopular: true },
      { id: 'T0304', moduleId: 'M03', name: '油缸缸径力', icon: 'cylinder-force', description: '油缸缸径与出力计算', category: 'calculate' },
    ],
  },
  {
    id: 'M04',
    name: '紧固件-材料',
    icon: 'fastener-material',
    category: ['query', 'calculate'],
    sortIndex: 4,
    tools: [
      { id: 'T0401', moduleId: 'M04', name: '高强度螺栓硬度', icon: 'bolt-hardness', description: '高强度螺栓硬度等级查询', category: 'query', isPopular: true },
      { id: 'T0402', moduleId: 'M04', name: '常用工程材料', icon: 'engineering-materials', description: '常用金属材料性能参数', category: 'query', isPopular: true },
      { id: 'T0403', moduleId: 'M04', name: '铝合金牌号', icon: 'aluminum-alloy', description: '铝合金牌号对照及性能', category: 'query' },
      { id: 'T0404', moduleId: 'M04', name: '金属材料计算器', icon: 'metal-calc', description: '金属材料重量/截面计算', category: 'calculate' },
    ],
  },
  {
    id: 'M05',
    name: '国家标准/机械标准',
    icon: 'standards',
    category: ['query'],
    sortIndex: 5,
    tools: [
      { id: 'T0501', moduleId: 'M05', name: '标准速查', icon: 'standard-lookup', description: '国家标准与机械行业标准速查', category: 'query', isPopular: true },
    ],
  },
  {
    id: 'M06',
    name: '紧固件-盘头类螺栓',
    icon: 'pan-bolt',
    category: ['query', 'select'],
    sortIndex: 6,
    tools: [
      { id: 'T0601', moduleId: 'M06', name: '配合公差', icon: 'tolerance-fit', description: '轴孔配合公差选择与查询', category: 'select', isPopular: true },
      { id: 'T0602', moduleId: 'M06', name: '螺纹配合', icon: 'thread-fit', description: '螺纹配合公差带查询', category: 'query' },
      { id: 'T0603', moduleId: 'M06', name: '形位公差', icon: 'geometric-tolerance', description: '形位公差符号与含义查询', category: 'query', isPopular: true },
      { id: 'T0604', moduleId: 'M06', name: '键与销', icon: 'key-pin', description: '键与销的标准规格选型', category: 'select' },
    ],
  },
  {
    id: 'M07',
    name: '紧固件-钩/凸化',
    icon: 'hook-convex',
    category: ['calculate'],
    sortIndex: 7,
    tools: [
      { id: 'T0701', moduleId: 'M07', name: '带轮齿形', icon: 'pulley-tooth', description: '同步带轮齿形参数计算', category: 'calculate', isPopular: true },
      { id: 'T0702', moduleId: 'M07', name: '四列平键', icon: 'four-key', description: '多列平键强度校核计算', category: 'calculate' },
      { id: 'T0703', moduleId: 'M07', name: '圆轮传动', icon: 'round-gear', description: '圆轮传动比计算', category: 'calculate' },
      { id: 'T0704', moduleId: 'M07', name: '水平滚柱链杆', icon: 'roller-chain', description: '滚柱链杆长度计算', category: 'calculate' },
    ],
  },
  {
    id: 'M08',
    name: '结构件-A',
    icon: 'structure-a',
    category: ['query', 'select'],
    sortIndex: 8,
    tools: [
      { id: 'T0801', moduleId: 'M08', name: '类型选择', icon: 'type-select', description: '结构件类型选择指南', category: 'select' },
      { id: 'T0802', moduleId: 'M08', name: '螺纹标准', icon: 'thread-standard', description: '螺纹类型与参数标准速查', category: 'query', isPopular: true },
      { id: 'T0803', moduleId: 'M08', name: '螺栓性能等级', icon: 'bolt-grade', description: '螺栓性能等级与承载能力', category: 'query', isPopular: true },
      { id: 'T0804', moduleId: 'M08', name: '标准速查表', icon: 'standard-table', description: '结构件标准尺寸速查表', category: 'query' },
    ],
  },
  {
    id: 'M09',
    name: '齿轮计算',
    icon: 'gear',
    category: ['calculate', 'query'],
    sortIndex: 9,
    tools: [
      { id: 'T0901', moduleId: 'M09', name: '齿轮几何(含参数)', icon: 'gear-geometry', description: '渐开线直齿轮几何参数计算', category: 'calculate', isPopular: true },
      { id: 'T0902', moduleId: 'M09', name: '齿轮动态', icon: 'gear-dynamic', description: '齿轮动态性能参数计算', category: 'calculate' },
      { id: 'T0903', moduleId: 'M09', name: '齿轮材料性能', icon: 'gear-material', description: '齿轮材料性能参数查询', category: 'query' },
    ],
  },
  {
    id: 'M10',
    name: '力学计算',
    icon: 'mechanics',
    category: ['calculate'],
    sortIndex: 10,
    tools: [
      { id: 'T1001', moduleId: 'M10', name: '直杆稳定', icon: 'column-stability', description: '压杆稳定性计算与校核', category: 'calculate', isPopular: true },
      { id: 'T1002', moduleId: 'M10', name: '梁挠度', icon: 'beam-deflection', description: '各类梁挠度与转角计算', category: 'calculate', isPopular: true },
      { id: 'T1003', moduleId: 'M10', name: '轴强度', icon: 'shaft-strength', description: '轴的强度校核计算', category: 'calculate' },
      { id: 'T1004', moduleId: 'M10', name: '强度校核', icon: 'strength-check', description: '零件强度安全系数校核', category: 'calculate' },
    ],
  },
]

/** 获取全部工具扁平列表 */
export function getAllTools() {
  return mockModules.flatMap((m) => m.tools)
}

/** 根据 ID 获取单个模块 */
export function getModuleById(id: string): Module | undefined {
  return mockModules.find((m) => m.id === id)
}

/** 根据 ID 获取单个工具 */
export function getToolById(toolId: string) {
  for (const m of mockModules) {
    const tool = m.tools.find((t) => t.id === toolId)
    if (tool) return { module: m, tool }
  }
  return undefined
}

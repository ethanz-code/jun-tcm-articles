import { TimelineEvent } from './types';

// Helper to generate a search URL since we don't have the exact deep links
const getSearchUrl = (query: string, source: string) => {
  return `https://www.baidu.com/s?wd=${encodeURIComponent(`习近平 中医药 ${query} site:${getSourceDomain(source)}`)}`;
};

const getSourceDomain = (source: string): string => {
  switch (source) {
    case '中国共产党新闻网': return 'cpc.people.com.cn';
    case '央广网': return 'cnr.cn';
    case '人民网': return 'people.com.cn';
    case '央视网': return 'cctv.com';
    case '新华网': return 'xinhuanet.com';
    case '中国政府网': return 'gov.cn';
    case '央视新闻': return 'news.cctv.com';
    default: return '';
  }
};

export const INTRO_TEXT = "习近平始终情系中医药的发展，对中医药发展的考察足迹遍及全国沿海与内地、城市与乡村。";

export const TIMELINE_DATA: TimelineEvent[] = [
  {
    id: '1',
    date: '2013年2月3日',
    content: '习近平考察甘肃省元古堆村，后来元古堆村通过发展中药材等特色种植，2018年实现了整村脱贫；',
    links: [
      { label: '中国共产党新闻网', url: getSearchUrl('甘肃省元古堆村', '中国共产党新闻网') },
      { label: '央广网', url: getSearchUrl('甘肃省元古堆村', '央广网') }
    ]
  },
  {
    id: '2',
    date: '2015年2月15日',
    content: '习近平考察陕西省西安市雁塔区电子城街道二〇五所社区；',
    links: [
      { label: '中国共产党新闻网', url: getSearchUrl('西安市雁塔区', '中国共产党新闻网') }
    ]
  },
  {
    id: '3',
    date: '2016年2月3日',
    content: '习近平考察江西省南昌市江中集团药谷制造基地；',
    links: [
      { label: '中国共产党新闻网', url: getSearchUrl('江中集团药谷', '中国共产党新闻网') }
    ]
  },
  {
    id: '4',
    date: '2017年12月12日',
    content: '习近平考察江苏省徐州市马庄村王秀英的中药香包工作室；',
    links: [
      { label: '人民网', url: getSearchUrl('徐州市马庄村 香包', '人民网') },
      { label: '中国共产党新闻网', url: getSearchUrl('徐州市马庄村 香包', '中国共产党新闻网') }
    ]
  },
  {
    id: '5',
    date: '2018年10月22日',
    content: '习近平考察广东省珠海市横琴新区粤澳合作中医药科技产业园；',
    links: [
      { label: '中国共产党新闻网', url: getSearchUrl('横琴新区粤澳合作中医药科技产业园', '中国共产党新闻网') },
      { label: '央视网', url: getSearchUrl('横琴新区粤澳合作中医药科技产业园', '央视网') }
    ]
  },
  {
    id: '6',
    date: '2019年4月15日',
    content: '习近平考察重庆市石柱土家族自治县中益乡华溪村中药材黄精等特色经济作物情况；',
    links: [
      { label: '新华网', url: getSearchUrl('重庆市石柱土家族自治县 黄精', '新华网') },
      { label: '央视网', url: getSearchUrl('重庆市石柱土家族自治县 黄精', '央视网') }
    ]
  },
  {
    id: '7',
    date: '2020年2月10日',
    content: '习近平在北京调研指导新冠肺炎疫情防控工作时强调要“坚持中西医结合”；',
    links: [
      { label: '人民网', url: getSearchUrl('北京调研 坚持中西医结合', '人民网') },
      { label: '央视网', url: getSearchUrl('北京调研 坚持中西医结合', '央视网') }
    ]
  },
  {
    id: '8',
    date: '2020年4月21日',
    content: '习近平考察陕西省平利县老县镇中心卫生院中医门诊室；',
    links: [
      { label: '新华网', url: getSearchUrl('陕西省平利县老县镇中心卫生院', '新华网') },
      { label: '中国共产党新闻网', url: getSearchUrl('陕西省平利县老县镇中心卫生院', '中国共产党新闻网') }
    ]
  },
  {
    id: '9',
    date: '2021年3月6日',
    content: '习近平看望参加全国政协十三届四次会议的医药卫生界、教育界委员，并参加联组会，强调“要做好中医药守正创新、传承发展工作”；',
    links: [
      { label: '中国共产党新闻网', url: getSearchUrl('政协十三届四次会议 中医药', '中国共产党新闻网') },
      { label: '新华网', url: getSearchUrl('政协十三届四次会议 中医药', '新华网') },
      { label: '央视网', url: getSearchUrl('政协十三届四次会议 中医药', '央视网') }
    ]
  },
  {
    id: '10',
    date: '2021年5月12日',
    content: '习近平考察河南省南阳市“医圣祠”和药益宝艾草制品有限公司；',
    links: [
      { label: '中国共产党新闻网', url: getSearchUrl('南阳市 医圣祠', '中国共产党新闻网') },
      { label: '人民网', url: getSearchUrl('南阳市 医圣祠', '人民网') },
      { label: '央广网', url: getSearchUrl('南阳市 医圣祠', '央广网') }
    ]
  },
  {
    id: '11',
    date: '2023年5月12日',
    content: '习近平考察河北省石家庄市国际生物医药园规划展馆时强调，“研发生产更多适合中国人生命基因传承和身体素质特点的‘中国药’，特别是要加强中医药传承创新发展。',
    links: [
      { label: '中国政府网', url: getSearchUrl('石家庄市国际生物医药园', '中国政府网') },
      { label: '央视新闻', url: getSearchUrl('石家庄市国际生物医药园', '央视新闻') },
      { label: '新华网', url: getSearchUrl('石家庄市国际生物医药园', '新华网') }
    ]
  },
  {
    id: '12',
    date: '2024年12月19日',
    content: '正在澳门视察的习近平总书记来到横琴粤澳深度合作区考察。习近平总书记听取粤澳共建中医药高端科技支撑平台的情况介绍，对他们整合多学科先进技术，助力中医药走向世界的做法表示肯定。',
    links: [
      { label: '中国共产党新闻网', url: getSearchUrl('澳门视察 横琴中医药', '中国共产党新闻网') },
      { label: '央视网', url: getSearchUrl('澳门视察 横琴中医药', '央视网') }
    ]
  }
];
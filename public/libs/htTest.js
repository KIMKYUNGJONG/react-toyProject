//const root = document.getElementById('root');
//const drawDiv = document.getElementById('canvas');

function autoFunc() {
  graphView.mi(function (e) {
    const list = dataModel.toDatas();
    const lineGlow = () => {
      for (let i = 0, size = list.size(); i < size; i++) {
        const dpName = list.get(i).getDisplayName();
        if (dpName === 'edge-link') {
          const o = Math.round; const r = Math.random; const s = 255;
          list.get(i).s({
            shadow: true,
            'shadow.color': 'rgb(255,255,255)',
            'shadow.offset.x': '0',
            'shadow.offset.y': '0',
            'edge.width': 1,
            'edge.color': 'rgba(246, 229, 141,1.0)',
            'edge.background': null,
            flow: true,
            'flow.count': 2,
            'flow.step': 10,
            'flow.element.shadow.begincolor': 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + 0.3 + ')',
            'flow.element.shadow.endcolor': 'rgba(255,255,255,0)',
            'flow.element.autorotate': true
          });
        }
      }
    };
    const effectOff = () => {   
      for (let i = 0, size = list.size(); i < size; i++) {
        const dpName = list.get(i).getDisplayName();
        if (dpName === 'edge-link') {
          list.get(i).s({
            shadow: false,
            flow: false,
            'edge.width': 1,
            'edge.color': 'rgb(145,115,205)',
            'edge.background': null,
          });
        };
        if (dpName === 'edge-sub') {
          list.get(i).s({
            shadow: false,
            flow: false,
            'edge.width': 1,
            'edge.color': 'rgb(145,115,205)',
            'edge.background': null,
          });
        };
      }     
    };
    const animateFlow = () => {
      for (let i = 0, size = list.size(); i < size; i++) {
        const dpName = list.get(i).getDisplayName();
        if (dpName === 'edge-sub') {
          list.get(i).s({
            flow: true,
            'flow.count': 2,
            'edge.width': 1,
            'edge.color': 'rgba(246, 229, 141,1.0)',
            shadow: true,
            'select.color': '#fabc37',
            'shadow.offset.x': 0,
            'shadow.offset.y': 0,
            'edge.background': null,
            'flow.step': 3,
            'flow.element.count': 2,
            'flow.element.min': 1,
            'flow.element.max': 1,
            'flow.element.space': 2,
            'flow.element.shadow.begincolor': 'rgba(196, 255, 251,0.8)',
            'flow.element.shadow.endcolor': 'rgba(255,255,255,0)',
            'flow.element.autorotate': true
          });
        }
      }
    };

    if (e.kind === 'clickData') {   
      const getData = e.data.getTag();
      if (getData === 'routerMain') {
        lineGlow();
      }
      if (getData === 'routerSub') {
        animateFlow();
      }
    }
    if (e.kind === 'clickBackground') {
      effectOff();
    }
  });
  graphView.enableFlow(60);
};
function loadData() {
  ht.Default.xhrLoad('storage/displays/testFolder/display_insert.json', function (text) {
    dataModel.enableAnimation();
    graphView.enableDashFlow();
    const json = ht.Default.parse(text);
    dataModel.deserialize(json);
    autoFunc(dataModel);
  });
}
function init() {
  dataModel = new ht.DataModel();
  graphView = new ht.graph.GraphView(dataModel);
  loadData();
  view = graphView.getView();
  view.className = 'flex-main';
  view.setAttribute('style', 'width:100vw; height:calc(100vh - 50px);');
  graphView.fitContent(false, 0);
  document.querySelector('#canvas').appendChild(view);
};
document.querySelector('#canvas').onload = init();

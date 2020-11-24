(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{373:function(t,a,e){"use strict";e.r(a);var s=e(42),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),e("blockquote",[e("p",[t._v("CAP原理：一个分布式系统最多只能同时满足一致性（Consistency）、可用性（Availability）和分区容错性（Partition tolerance）这三项中的两项。")])]),t._v(" "),e("p",[t._v("2000年7月，加州大学伯克利分校的Eric Brewer教授在ACM PODC会议上提出CAP猜想。2年后，麻省理工学院的Seth Gilbert和Nancy Lynch从理论上证明了CAP。之后，CAP理论正式成为分布式计算领域的公认定理。")]),t._v(" "),e("p",[t._v("分布式系统前提是有多个服务器节点。")]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"一致性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一致性"}},[t._v("#")]),t._v(" 一致性")]),t._v(" "),e("p",[t._v("此处的一致性为分布式下的一致性。")]),t._v(" "),e("p",[t._v("如果系统对一个写操作返回成功，那么之后的读请求都必须读到这个新数据；如果返回失败，那么所有读操作都不能读到这个数据，对调用者而言数据具有强一致性(strong consistency) (又叫原子性 atomic、线性一致性 linearizable consistency)")]),t._v(" "),e("h2",{attrs:{id:"可用性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#可用性"}},[t._v("#")]),t._v(" 可用性")]),t._v(" "),e("p",[t._v("所有读写请求在一定时间内得到响应，可终止、不会一直等待")]),t._v(" "),e("h2",{attrs:{id:"分区容错性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分区容错性"}},[t._v("#")]),t._v(" 分区容错性")]),t._v(" "),e("p",[t._v("the system continues to operate despite arbitrary message loss or failure of part of the system")]),t._v(" "),e("p",[t._v("尽管系统的任意消息丢失或者某个节点宕机，系统仍能继续运行，正常提供服务。")]),t._v(" "),e("p",[t._v("提高分区容忍性的办法就是一个数据项复制到多个节点上，那么出现分区之后，这一数据项就可能分布到各个区里。分区容忍就提高了。然而，要把数据复制到多个节点，就会带来一致性的问题，就是多个节点上面的数据可能是不一致的。要保证一致，每次写操作就都要等待全部节点写成功，而这等待又会带来可用性的问题。")]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"cap的证明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cap的证明"}},[t._v("#")]),t._v(" CAP的证明")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://note.youdao.com/yws/api/personal/file/DC83EB743E874A1198D745D66F068450?method=download&shareKey=5a02e71ca11775cb7264befa31e51bbe",alt:"image"}})]),t._v(" "),e("p",[t._v("如上图，是我们证明CAP的基本场景，网络中有两个节点N1和N2，可以简单的理解N1和N2分别是两台计算机，他们之间网络可以连通，N1中有一个应用程序A，和一个数据库V，N2也有一个应用程序B2和一个数据库V。现在，A和B是分布式系统的两个部分，V是分布式系统的数据存储的两个子数据库。")]),t._v(" "),e("p",[t._v("在满足一致性的时候，N1和N2中的数据是一样的，V0=V0。在满足可用性的时候，用户不管是请求N1或者N2，都会得到立即响应。在满足分区容错性的情况下，N1和N2有任何一方宕机，或者网络不通的时候，都不会影响N1和N2彼此之间的正常运作。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://note.youdao.com/yws/api/personal/file/FD0ADA17734D40FFAB8204EEFC322138?method=download&shareKey=bdd08640b096949684728641efc77ff2",alt:"image"}})]),t._v(" "),e("p",[t._v("如上图，是分布式系统正常运转的流程，用户向N1机器请求数据更新，程序A更新数据库Vo为V1，分布式系统将数据进行同步操作M，将V1同步的N2中V0，使得N2中的数据V0也更新为V1，N2中的数据再响应N2的请求。")]),t._v(" "),e("p",[t._v("这里，可以定义N1和N2的数据库V之间的数据是否一样为一致性；外部对N1和N2的请求响应为可用行；N1和N2之间的网络环境为分区容错性。这是正常运作的场景，也是理想的场景，然而现实是残酷的，当错误发生的时候，一致性和可用性还有分区容错性，是否能同时满足，还是说要进行取舍呢？")]),t._v(" "),e("p",[t._v("作为一个分布式系统，它和单机系统的最大区别，就在于网络，现在假设一种极端情况，N1和N2之间的网络断开了，我们要支持这种网络异常，相当于要满足分区容错性，能不能同时满足一致性和响应性呢？还是说要对他们进行取舍。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://note.youdao.com/yws/api/personal/file/52D4E24D53CB4177BADEA3D638FF2E6C?method=download&shareKey=5506e6abb5a64da01bf1c68e95970d6f",alt:"image"}})]),t._v(" "),e("p",[t._v("假设在N1和N2之间网络断开的时候，有用户向N1发送数据更新请求，那N1中的数据V0将被更新为V1，由于网络是断开的，所以分布式系统同步操作M，所以N2中的数据依旧是V0；这个时候，有用户向N2发送数据读取请求，由于数据还没有进行同步，应用程序没办法立即给用户返回最新的数据V1，怎么办呢？有二种选择，第一，牺牲数据一致性，响应旧的数据V0给用户；第二，牺牲可用性，阻塞等待，直到网络连接恢复，数据更新操作M完成之后，再给用户响应最新的数据V1。")]),t._v(" "),e("p",[t._v("这个过程，证明了要满足分区容错性的分布式系统，只能在一致性和可用性两者中，选择其中一个。")]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"cap权衡"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cap权衡"}},[t._v("#")]),t._v(" CAP权衡")]),t._v(" "),e("p",[t._v("通过CAP理论，我们知道无法同时满足一致性、可用性和分区容错性这三个特性，那要舍弃哪个呢？")]),t._v(" "),e("ul",[e("li",[t._v("CA without P：如果不要求P（不允许分区），则C（强一致性）和A（可用性）是可以保证的。但其实分区不是你想不想的问题，而是始终会存在，因此CA的系统更多的是允许分区后各子系统依然保持CA。")]),t._v(" "),e("li",[t._v("CP without A：如果不要求A（可用），相当于每个请求都需要在Server之间强一致，而P（分区）会导致同步时间无限延长，如此CP也是可以保证的。很多传统的数据库分布式事务都属于这种模式。")]),t._v(" "),e("li",[t._v("AP wihtout C：要高可用并允许分区，则需放弃一致性。一旦分区发生，节点之间可能会失去联系，为了高可用，每个节点只能用本地数据提供服务，而这样会导致全局数据的不一致性。现在众多的NoSQL都属于此类。")])]),t._v(" "),e("p",[t._v("对于多数大型互联网应用的场景，主机众多、部署分散，而且现在的集群规模越来越大，所以节点故障、网络故障是常态，而且要保证服务可用性达到N个9，即保证P和A，舍弃C（退而求其次保证最终一致性）。虽然某些地方会影响客户体验，但没达到造成用户流程的严重程度。")]),t._v(" "),e("p",[t._v("对于涉及到钱财这样不能有一丝让步的场景，C必须保证。网络发生故障宁可停止服务，这是保证CA，舍弃P。貌似这几年国内银行业发生了不下10起事故，但影响面不大，报到也不多，广大群众知道的少。还有一种是保证CP，舍弃A。例如网络故障事只读不写。")]),t._v(" "),e("p",[t._v("孰优孰略，没有定论，只能根据场景定夺，适合的才是最好的。")])])}),[],!1,null,null,null);a.default=r.exports}}]);
svg(viewBox="-200 -200 400 400")
  g
    animateTransform(attributeName="transform" attributeType="XML" type="rotate" from=0 to=360 dur="20s" repeatCount="indefinite")
    
    each i in [1, 2, 3, 4, 5, 6]
      path(stroke="#000000" stroke-width=3 stroke-dasharray=80 stroke-dashoffset=80 d="M40 0 L80 0 Z" transform="rotate("+(-i*120+(i>3&&300))+")")
        set(attributeName="stroke" to="#000000" begin="hb0.begin" fill="freeze")
        set(attributeName="stroke-dashoffset" to=80 begin="hb0.begin" fill="freeze")
        animate(id="hb"+i attributeName="stroke-dashoffset" from=80 to=0 dur="1s" begin="hb"+(i-1)+".begin+200ms" fill="freeze")
        animate(attributeName="stroke" from="#000000" to="transparent" dur="1s" begin="reset.begin" fill="freeze")

    each i in [1, 2, 3]
      path(stroke="#000000" stroke-width=3 stroke-dasharray=80 stroke-dashoffset=80 d="M0 0 L-40 0 Z" transform="rotate("+i*120+" 0 0) rotate(-60 -40 0)")
        set(attributeName="stroke" to="#000000" begin="hb0.begin" fill="freeze")
        set(attributeName="stroke-dashoffset" to=80 begin="hb0.begin" fill="freeze")
        animate(attributeName="stroke-dashoffset" from=80 to=0 dur="1s" begin="hb"+2*i+".end" fill="freeze")
        animate(attributeName="stroke" from="#000000" to="transparent" dur="1s" begin="reset.begin" fill="freeze")
      path(stroke="#000000" stroke-width=3 stroke-dasharray=80 stroke-dashoffset=80 d="M0 -3 L40 -3 M0 3 L40 3 Z" transform="rotate("+i*120+" 0 0) rotate(-60 40 0)")
        set(attributeName="stroke" to="#000000" begin="hb0.begin" fill="freeze")
        set(attributeName="stroke-dashoffset" to=80 begin="hb0.begin" fill="freeze")
        animate(attributeName="stroke-dashoffset" from=80 to=0 dur="1s" begin="hb"+2*i+".end" fill="freeze")
        animate(attributeName="stroke" from="#000000" to="transparent" dur="1s" begin="reset.begin" fill="freeze")

    each i in [1, 2, 3, 4, 5, 6]
      circle(cx=40 r=10 fill="#41B72F" transform="rotate("+60*i+")")
        animate(attributeName="cx" from=0 to=40 dur="1s" begin="start.begin" keyTimes="0;1" keySplines="0.87 0 0.13 1" calcMode="spline" fill="freeze")
        animate(attributeName="cx" from=40 to=0 dur="1s" begin="reset.begin+600ms" keyTimes="0;1" keySplines="0.87 0 0.13 1" calcMode="spline" fill="freeze")
      circle(cx=80 r=4 fill="transparent" transform="rotate("+60*i+")")
        animate(attributeName="cx" from=160 to=80 dur="1s" begin="start.begin" keyTimes="0;1" keySplines="0.87 0 0.13 1" calcMode="spline" fill="freeze")
        animate(attributeName="fill" from="transparent" to="#B33FBF" dur="1s" begin="start.begin" keyTimes="0;1" keySplines="0.87 0 0.13 1" calcMode="spline" fill="freeze")
        animate(attributeName="cx" from=80 to=160 dur="1s" begin="reset.begin+600ms" keyTimes="0;1" keySplines="0.87 0 0.13 1" calcMode="spline" fill="freeze")
        animate(attributeName="fill" from="#B33FBF" to="transparent" dur="1s" begin="reset.begin+600ms" keyTimes="0;1" keySplines="0.87 0 0.13 1" calcMode="spline" fill="freeze")
  
  g
    animate#start(attributeName="fill" dur="1s" begin="0;reset.end")
    animate#hb0(attributeName="fill" dur="1s" begin="start.end-300ms")
    animate#reset(attributeName="fill" dur="2s" begin="hb6.end+2s")
    
    <h1 class="jt --debug">
    
<span class="jt__row">
<span class="jt__text">PRANAV</span>
</span>
<span class="jt__row jt__row--sibling" aria-hidden="true">
<span class="jt__text">PRANAV</span>
</span>
<span class="jt__row jt__row--sibling" aria-hidden="true">
<span class="jt__text">PRANAV</span>
</span>
<span class="jt__row jt__row--sibling" aria-hidden="true">
<span class="jt__text">PRANAV</span>
</span>
</h1>

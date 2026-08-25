LineChart — three series maximum, in --series order. Values live outside the SVG so they never stretch.

    <LineChart min={0} max={210} xLabels={["Sep","Dec","Mar","Jun","Aug"]}
      series={[{label:"Delivered",points:[38,54,82,100,164,192,198]},{label:"Failed",points:[14,16,60,82,78,54,44]}]}/>

If you cannot label the axis, delete the chart and state the number instead.

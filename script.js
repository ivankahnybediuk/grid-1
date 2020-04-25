let firstGrid=
<div className="firstGrid">
<div className="firstGrid__1"></div>
<div className="firstGrid__2"></div>
<div className="firstGrid__3"></div>
<div className="firstGrid__4"></div>
<div className="firstGrid__5"></div>
<div className="firstGrid__6"></div>
</div>

let secondGrid=
<div className="secondGrid">
<div className="secondGrid__1"></div>
<div className="secondGrid__2"></div>
<div className="secondGrid__3"></div>
<div className="secondGrid__4"></div>
<div className="secondGrid__5"></div>
<div className="secondGrid__6"></div>
<div className="secondGrid__7"></div>
<div className="secondGrid__8"></div>
</div>


// =======================Page======================================================
let page =
<div className="page">
{firstGrid}
{secondGrid}
</div>

ReactDOM.render(page, document.getElementById("root"));

export default function DailyBreakdown() {
  return (
    <div className="summary-box">
      <div className="sb-header">Eaten Today</div>
      <div className="sb-cal">10,304 <span>kcal</span></div>
      <div className="sb-breakdown-box">
        <div className="sb-breakdown-fats">
          <div className="sb-breakdown-header">Fats</div>
          <div className="sb-breakdown-content">50g / 50g</div>
        </div>
        <div className="sb-breakdown-carbs">
          <div className="sb-breakdown-header">Carbs</div>
          <div className="sb-breakdown-content">98g / 128g</div>
        </div>
        <div className="sb-breakdown-protein">
          <div className="sb-breakdown-header">Protein</div>
          <div className="sb-breakdown-content">54g / 78g</div>
        </div>
      </div>
    </div>
  )
}
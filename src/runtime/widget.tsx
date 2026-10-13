/** @jsx jsx */
import { React, type AllWidgetProps, jsx, css } from 'jimu-core'
import { type IMConfig } from '../config'

const IDEAM_LOGO_BASE64 = 'data:image/png;base64,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'

interface ItemStats {
  numViews: number
  title: string
  created: number
  modified: number
  owner: string
}

const Icons = {
  Eye: () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="13" r="3"/>
    </svg>
  ),
  Refresh: () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/>
    </svg>
  ),
  Layers: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/>
      <path d="m22 12.5-8.58 3.91a2 2 0 0 1-1.66 0L2 12.5"/>
      <path d="m22 17.5-8.58 3.91a2 2 0 0 1-1.66 0L2 17.5"/>
    </svg>
  ),
  Chart: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/>
    </svg>
  ),
  Code: () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
    </svg>
  ),
  Check: () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  )
}

const simcotStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@700;800&display=swap');

  width: 100%;
  height: 100%;
  box-sizing: border-box;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  color: #002625;
  display: flex;
  flex-direction: column;
  background: transparent;
  user-select: none;

  .simcot-counter-card {
    width: 100%;
    height: 100%;
    min-height: 290px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #ffffff;
    border: 1px solid #c9e3e7;
    border-radius: 14px;
    padding: 16px 18px;
    box-sizing: border-box;
    box-shadow: 0 8px 24px -4px rgba(8, 127, 155, 0.12), 0 2px 8px -2px rgba(0, 38, 37, 0.05);
    position: relative;
    overflow: hidden;
  }

  /* Franja superior con la paleta oficial SIMCOT / IDEAM */
  .simcot-brand-stripe {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: linear-gradient(90deg, #087f9b 0%, #126057 55%, #10b981 100%);
  }

  /* Encabezado */
  .simcot-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    margin-top: 4px;
  }

  .simcot-brand-group {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .simcot-logo {
    height: 38px;
    width: auto;
    object-fit: contain;
    filter: drop-shadow(0 2px 4px rgba(8, 127, 155, 0.15));
  }

  .simcot-title-box {
    display: flex;
    flex-direction: column;
  }

  .simcot-tag {
    font-size: 0.65rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #087f9b;
  }

  .simcot-heading {
    font-size: 0.92rem;
    font-weight: 800;
    color: #002625;
    letter-spacing: -0.01em;
    margin: 1px 0 0 0;
    line-height: 1.2;
  }

  .simcot-subtitle {
    font-size: 0.68rem;
    color: #3d6665;
    font-weight: 500;
    margin-top: 1px;
  }

  .live-badge {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    background: #e6f7f4;
    border: 1px solid #a3e3d6;
    color: #0d705c;
    padding: 3px 8px;
    border-radius: 9999px;
    font-size: 0.65rem;
    font-weight: 700;
  }

  .live-dot {
    width: 7px;
    height: 7px;
    border-radius: 9999px;
    background: #10b981;
    box-shadow: 0 0 8px #10b981;
    animation: livePulse 2s infinite ease-in-out;
  }

  @keyframes livePulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.4; transform: scale(0.85); }
  }

  /* Cuerpo del contador */
  .simcot-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 12px 0 8px 0;
  }

  .odometer-frame {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 6px 12px;
    background: #f0f7f8;
    border: 1px solid #bfe1e6;
    border-radius: 10px;
    box-shadow: inset 0 2px 4px rgba(8, 127, 155, 0.06);
  }

  .odometer-tile {
    width: 28px;
    height: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'JetBrains Mono', Consolas, monospace;
    font-size: 1.6rem;
    font-weight: 800;
    color: #ffffff;
    background: linear-gradient(180deg, #002625 0%, #087f9b 100%);
    border-radius: 5px;
    box-shadow: 0 3px 8px rgba(8, 127, 155, 0.35);
    border: 1px solid rgba(255, 255, 255, 0.15);
  }

  .odometer-comma {
    font-family: 'JetBrains Mono', Consolas, monospace;
    font-size: 1.6rem;
    font-weight: 800;
    color: #087f9b;
    margin: 0 1px;
    padding-bottom: 6px;
  }

  .counter-caption {
    font-size: 0.72rem;
    color: #304e4e;
    margin-top: 7px;
    display: flex;
    align-items: center;
    gap: 6px;
    font-weight: 600;
  }

  /* Tarjetas de métricas complementarias */
  .metrics-strip {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
    margin: 6px 0;
  }

  .metric-mini-card {
    background: #f7fafb;
    border: 1px solid #d8ebed;
    border-radius: 8px;
    padding: 7px 10px;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .metric-mini-icon {
    width: 28px;
    height: 28px;
    border-radius: 6px;
    background: #e1f2f5;
    color: #087f9b;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .metric-mini-info {
    display: flex;
    flex-direction: column;
    min-width: 0;
  }

  .metric-mini-label {
    font-size: 0.62rem;
    color: #4f7373;
    font-weight: 600;
    line-height: 1.1;
  }

  .metric-mini-val {
    font-size: 0.85rem;
    font-weight: 800;
    color: #002625;
    margin-top: 1px;
  }

  /* Pie del widget */
  .simcot-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    padding-top: 8px;
    border-top: 1px solid #e3f0f2;
  }

  .sync-text {
    font-size: 0.64rem;
    color: #4d7070;
    font-weight: 500;
  }

  .actions-group {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .btn-action {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: 0.68rem;
    font-weight: 700;
    padding: 4px 9px;
    border-radius: 6px;
    border: 1px solid #bce1e6;
    background: #ffffff;
    color: #087f9b;
    cursor: pointer;
    transition: all 0.15s ease;
  }
  .btn-action:hover {
    background: #e6f4f6;
    border-color: #087f9b;
    color: #002625;
  }

  .spin {
    animation: rotateSpin 1s linear infinite;
  }

  @keyframes rotateSpin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  /* Modal de código para incrustar */
  .embed-box {
    margin-top: 8px;
    padding: 8px 10px;
    background: #002625;
    border-radius: 6px;
    color: #bbf7d0;
    font-family: monospace;
    font-size: 0.64rem;
    word-break: break-all;
    user-select: all;
  }
`

const Widget = (props: AllWidgetProps<IMConfig>) => {
  const portalUrl = props.config?.portalUrl || 'https://www.arcgis.com'
  const itemId = props.config?.itemId || '6b45024fb7a247219c33adc524345589'
  const widgetTitle = props.config?.widgetTitle || 'Monitoreo de Visitas SIMCOT'
  const refreshIntervalSec = props.config?.refreshIntervalSec || 30
  const showTableroStats = props.config?.showTableroStats !== false
  const tableroItemId = props.config?.tableroItemId || '6f82270e8c2b4872979478f43e1494d5'

  const [viewsCount, setViewsCount] = React.useState<number>(24390)
  const [tableroViews, setTableroViews] = React.useState<number>(22011)
  const [isRefreshing, setIsRefreshing] = React.useState<boolean>(false)
  const [lastSyncTime, setLastSyncTime] = React.useState<string>('En línea')
  const [copied, setCopied] = React.useState<boolean>(false)
  const [showEmbedCode, setShowEmbedCode] = React.useState<boolean>(false)

  // Obtener estadísticas de ArcGIS Online en tiempo real
  const fetchSimcotStats = React.useCallback(async (isManual: boolean = false) => {
    if (isManual) setIsRefreshing(true)

    try {
      // 1. Estadísticas de la StoryMap SIMCOT
      const resStory = await fetch(`${portalUrl}/sharing/rest/content/items/${itemId}?f=json`, {
        cache: 'no-store'
      })
      if (resStory.ok) {
        const dataStory: ItemStats = await resStory.json()
        if (dataStory && typeof dataStory.numViews === 'number') {
          setViewsCount(dataStory.numViews)
        }
      }

      // 2. Estadísticas del Tablero de Experiencia ExB (si está activo)
      if (showTableroStats && tableroItemId) {
        const resTablero = await fetch(`${portalUrl}/sharing/rest/content/items/${tableroItemId}?f=json`, {
          cache: 'no-store'
        })
        if (resTablero.ok) {
          const dataTablero: ItemStats = await resTablero.json()
          if (dataTablero && typeof dataTablero.numViews === 'number') {
            setTableroViews(dataTablero.numViews)
          }
        }
      }

      const now = new Date()
      setLastSyncTime(now.toLocaleTimeString('es-CO', { hour: '2-digit', minute: '2-digit', second: '2-digit' }))
    } catch (err) {
      console.warn('[SIMCOT] Error al sincronizar estadísticas:', err)
    } finally {
      setIsRefreshing(false)
    }
  }, [portalUrl, itemId, showTableroStats, tableroItemId])

  // Carga inicial y auto-refresco
  React.useEffect(() => {
    fetchSimcotStats()
    const timer = setInterval(() => {
      fetchSimcotStats()
    }, Math.max(10, refreshIntervalSec) * 1000)

    return () => clearInterval(timer)
  }, [fetchSimcotStats, refreshIntervalSec])

  // Formatear dígitos con separador de miles
  const digitsElements = React.useMemo(() => {
    const formatted = viewsCount.toLocaleString('es-CO')
    return formatted.split('')
  }, [viewsCount])

  const copyEmbedSnippet = () => {
    const snippet = '<iframe src="https://dureyes97.github.io/contador-visitas-simcot/" width="100%" height="340" frameborder="0" style="border:none;border-radius:12px;"></iframe>'
    navigator.clipboard.writeText(snippet).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    })
  }

  return (
    <div css={simcotStyle} className="jimu-widget">
      <div className="simcot-counter-card">
        <div className="simcot-brand-stripe" />

        {/* Encabezado con Brand IDEAM / SIMCOT */}
        <div className="simcot-header">
          <div className="simcot-brand-group">
            <img
              src={IDEAM_LOGO_BASE64}
              alt="Logo Oficial IDEAM"
              className="simcot-logo"
            />
            <div className="simcot-title-box">
              <span className="simcot-tag">IDEAM • SIMCOT</span>
              <h2 className="simcot-heading">{widgetTitle}</h2>
              <span className="simcot-subtitle">Coberturas de la Tierra Colombia</span>
            </div>
          </div>

          <div className="live-badge" title="Conexión en vivo con ArcGIS Online">
            <span className="live-dot" />
            <span>En vivo</span>
          </div>
        </div>

        {/* Visualizador de dígitos del contador oficial */}
        <div className="simcot-body">
          <div className="odometer-frame">
            {digitsElements.map((char, idx) => {
              if (char === '.' || char === ',') {
                return <span key={idx} className="odometer-comma">{char}</span>
              }
              return (
                <div key={idx} className="odometer-tile">
                  {char}
                </div>
              )
            })}
          </div>

          <div className="counter-caption">
            <Icons.Eye /> Vistas acumuladas en ArcGIS StoryMaps
          </div>
        </div>

        {/* Franja de métricas complementarias del ecosistema SIMCOT */}
        <div className="metrics-strip">
          <div className="metric-mini-card">
            <div className="metric-mini-icon">
              <Icons.Chart />
            </div>
            <div className="metric-mini-info">
              <span className="metric-mini-label">Tablero de Estadísticas</span>
              <span className="metric-mini-val">{tableroViews.toLocaleString('es-CO')} vistas</span>
            </div>
          </div>

          <div className="metric-mini-card">
            <div className="metric-mini-icon">
              <Icons.Layers />
            </div>
            <div className="metric-mini-info">
              <span className="metric-mini-label">Metodología CLC</span>
              <span className="metric-mini-val">Escala 1:100.000</span>
            </div>
          </div>
        </div>

        {/* Pie con estado de sincronización y acciones */}
        <div className="simcot-footer">
          <span className="sync-text">
            Sincronizado: {lastSyncTime}
          </span>

          <div className="actions-group">
            <button
              className="btn-action"
              onClick={() => setShowEmbedCode(!showEmbedCode)}
              title="Código para incrustar en StoryMap"
            >
              <Icons.Code />
              <span>Incrustar</span>
            </button>

            <button
              className="btn-action"
              onClick={() => fetchSimcotStats(true)}
              title="Actualizar datos ahora"
            >
              <span className={isRefreshing ? 'spin' : ''}>
                <Icons.Refresh />
              </span>
              <span>Actualizar</span>
            </button>
          </div>
        </div>

        {/* Panel desplegable con código Iframe para StoryMaps */}
        {showEmbedCode && (
          <div>
            <div className="embed-box">
              &lt;iframe src="https://dureyes97.github.io/contador-visitas-simcot/" width="100%" height="340" frameborder="0"&gt;&lt;/iframe&gt;
            </div>
            <button
              className="btn-action"
              style={{ marginTop: '5px', width: '100%', justifyContent: 'center' }}
              onClick={copyEmbedSnippet}
            >
              {copied ? <Icons.Check /> : <Icons.Code />}
              <span>{copied ? '¡Copiado al portapapeles!' : 'Copiar iframe para StoryMap'}</span>
            </button>
          </div>
        )}

      </div>
    </div>
  )
}

export default Widget
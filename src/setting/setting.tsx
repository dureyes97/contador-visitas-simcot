/** @jsx jsx */
import { React, jsx, css } from 'jimu-core'
import { type AllWidgetSettingProps } from 'jimu-for-builder'
import { SettingSection, SettingRow } from 'jimu-ui/advanced/setting-components'
import { TextInput, NumericInput, Switch } from 'jimu-ui'
import { type IMConfig } from '../config'

const settingStyle = css`
  .setting-inner {
    padding: 10px;
    font-size: 13px;
  }
  .brand-chip {
    display: inline-block;
    padding: 3px 8px;
    border-radius: 4px;
    background: #087f9b15;
    color: #087f9b;
    font-weight: 600;
    font-size: 11px;
    margin-bottom: 8px;
  }
`

const Setting = (props: AllWidgetSettingProps<IMConfig>) => {
  const portalUrl = props.config?.portalUrl || 'https://www.arcgis.com'
  const itemId = props.config?.itemId || '6b45024fb7a247219c33adc524345589'
  const widgetTitle = props.config?.widgetTitle || 'Visitas Registradas SIMCOT'
  const refreshIntervalSec = props.config?.refreshIntervalSec || 30
  const showTableroStats = props.config?.showTableroStats !== false
  const tableroItemId = props.config?.tableroItemId || '6f82270e8c2b4872979478f43e1494d5'

  const onSettingChange = (key: string, value: any) => {
    props.onSettingChange({
      id: props.id,
      config: props.config.set(key, value)
    })
  }

  return (
    <div css={settingStyle} className="widget-setting-simcot">
      <SettingSection title="Identidad Institucional SIMCOT">
        <div className="brand-chip">IDEAM • Coberturas de la Tierra</div>
        <SettingRow label="Título del Widget">
          <TextInput
            size="sm"
            value={widgetTitle}
            onChange={e => onSettingChange('widgetTitle', e.target.value)}
          />
        </SettingRow>

        <SettingRow label="URL de ArcGIS Online / Portal">
          <TextInput
            size="sm"
            value={portalUrl}
            onChange={e => onSettingChange('portalUrl', e.target.value)}
          />
        </SettingRow>

        <SettingRow label="ID del Ítem StoryMap SIMCOT">
          <TextInput
            size="sm"
            value={itemId}
            onChange={e => onSettingChange('itemId', e.target.value)}
          />
        </SettingRow>

        <SettingRow label="Intervalo de Refresco (seg)">
          <NumericInput
            size="sm"
            value={refreshIntervalSec}
            min={10}
            max={3600}
            onChange={val => onSettingChange('refreshIntervalSec', val || 30)}
          />
        </SettingRow>
      </SettingSection>

      <SettingSection title="Tablero de Estadísticas">
        <SettingRow label="Mostrar Métricas del Tablero">
          <Switch
            checked={showTableroStats}
            onChange={e => onSettingChange('showTableroStats', e.target.checked)}
          />
        </SettingRow>

        {showTableroStats && (
          <SettingRow label="ID del Ítem Tablero (ExB)">
            <TextInput
              size="sm"
              value={tableroItemId}
              onChange={e => onSettingChange('tableroItemId', e.target.value)}
            />
          </SettingRow>
        )}
      </SettingSection>
    </div>
  )
}

export default Setting
import { Handle, Position } from 'reactflow'

export function EndNode() {
  return (
    <div
      style={{
        minWidth: 140,
        height: 44,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        background: 'linear-gradient(135deg, #ef4444, #dc2626)',
        color: '#fff',
        fontWeight: 600,
        fontSize: 14,
        position: 'relative',
      }}
    >
      END

      <Handle
        type="target"
        position={Position.Left}
        style={{ background: '#fff' }}
      />
    </div>
  )
}

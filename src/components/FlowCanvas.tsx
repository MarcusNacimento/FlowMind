'use client'

import ReactFlow, { Background, Controls } from 'reactflow'
import 'reactflow/dist/style.css'
import { StartNode } from '@/components/nodes/StartNode'

const nodeTypes = {
  start: StartNode,
}

export function FlowCanvas() {
  const nodes = [
    {
      id: '1',
      type: 'start',
      position: { x: 250, y: 100 },
      data: {},
    },
  ]

  return (
    <div className="w-full h-[600px] border border-zinc-800 rounded-lg">
      <ReactFlow nodes={nodes} nodeTypes={nodeTypes}>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  )
}

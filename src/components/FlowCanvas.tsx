'use client'

import ReactFlow, { Background, Controls, addEdge, useEdgesState, useNodesState,  updateEdge } from 'reactflow'
import { useCallback } from 'react'

import 'reactflow/dist/style.css'
import { StartNode } from '@/components/nodes/StartNode'
import { EndNode } from '@/components/nodes/EndNode'
import { useEffect } from 'react'


const nodeTypes = {
  start: StartNode,
  end: EndNode,
}


export function FlowCanvas() {
  const initialNodes = [
    { id: '1', type: 'start', position: { x: 250, y: 100 }, data: {} },
    { id: '2', type: 'end', position: { x: 250, y: 300 }, data: {} },
  ]

  
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)

  const [edges, setEdges, onEdgesChange] = useEdgesState([])

  const onConnect = (params: any) => setEdges((eds) => addEdge(params, eds))

  const onEdgeUpdate = useCallback((oldEdge: any, newConnection: any) => {
  setEdges((els) => updateEdge(oldEdge, newConnection, els))
}, [setEdges])


  useEffect(() => {
  const saved = localStorage.getItem('flowmind')
  if (!saved) return

  const parsed = JSON.parse(saved)
  if (parsed?.nodes) setNodes(parsed.nodes)
  if (parsed?.edges) setEdges(parsed.edges)
}, [setNodes, setEdges])

useEffect(() => {
  localStorage.setItem('flowmind', JSON.stringify({ nodes, edges }))
}, [nodes, edges])


  return (
    <div style={{ width: '100%', height:'100vh' }}>
   <ReactFlow
  nodes={nodes}
  edges={edges}
  onNodesChange={onNodesChange}
  onEdgesChange={onEdgesChange}
  onConnect={onConnect}
  onEdgeUpdate={onEdgeUpdate}
  nodeTypes={nodeTypes}
  fitView
  deleteKeyCode={['Backspace', 'Delete']}
>
        <Background />
        <Controls />
      </ReactFlow>

    </div>
    
  )
}

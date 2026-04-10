import CounterDisplay from './CounterDisplay'
import CounterControls from './CounterControls'

export default function Component({ count, onIncrement, onDecrement }) {
  return (
    <section className="component">
      <CounterDisplay count={count} />
      <CounterControls
        onIncrement={onIncrement}
        onDecrement={onDecrement}
      />
    </section>
  )
}

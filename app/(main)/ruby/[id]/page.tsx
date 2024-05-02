export const runtime = "edge";

const RubyPage = ({ params }: { params: { id: string } }) => {
  return <div>RubyPage: {params.id}</div>
}

export default RubyPage;
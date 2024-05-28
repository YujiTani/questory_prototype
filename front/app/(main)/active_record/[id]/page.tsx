export const runtime = "edge";

const ActiveRecordPage = ({ params }: { params: { id: string } }) => {
  return <div>ActiveRecordPage: {params.id}</div>
}

export default ActiveRecordPage
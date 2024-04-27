import { Separator } from "../ui/separator";

type Props = {
  title: string;
  subTitle: string;
  description: String;
} & React.ComponentProps<"div">;

const Kanban = ({ title, subTitle, description, className }: Props) => {
  return (
    <div className="p-4 tracking-wide rounded-md bg-slate-100 border-slate-200 border-b-[4px]">
      <div className="space-y-1">
        <h1 className="text-2xl text-right font-bold leading-none">
          {title}
          <small className="ml-2 text-sm">{subTitle}</small>
        </h1>
      </div>
      <Separator className="my-4 bg-slate-400" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>{description}</div>
      </div>
    </div>
  );
};

export default Kanban;

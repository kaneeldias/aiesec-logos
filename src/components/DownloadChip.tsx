import Link from "next/link";

type Props = {
	fileType: string
	url: string
	variant: "blue" | "white" | "black"
}

export default function DownloadChip(props: Props) {
	let bgColor = "bg-white";
	let textColor = "text-gray-800";
	
	if (props.variant === "blue") {
		bgColor = "bg-blue-600";
		textColor = "text-white";
	}
	
	if (props.variant === "black") {
		bgColor = "bg-gray-800";
		textColor = "text-white";
	}
	
	return (
		<Link href={props.url} target={"_blank"}>
			<div className={`rounded-full ${bgColor} ${textColor} bg-opacity-85 hover:bg-opacity-100 px-4 py-1 transition-all`}>{props.fileType}</div>
		</Link>
	);
}
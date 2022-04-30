import Image from "next/image";
import { useRouter } from "next/router";
import classes from "../../styles/card.module.css";
import { limitDescription } from "../utils";
interface channelCardProps {
  url: string;
  name: string;
  description: string;
  customUrl: string;
  viewCount: string;
  videoCount: string;
  subscriberCount: string;
  hiddenSubscriberCount: boolean;
  channelId: string;
}

function ChannelCard(props: channelCardProps) {
  const router = useRouter();
  const handleChannel = () => {
    router.push(`channels/${props.customUrl}?channelId=${props.channelId}`);
  };
  return (
    <div className={classes.card}>
      <div className={classes.left}>
        <Image
          src={props.url}
          alt={props.name}
          layout="fixed"
          height={100}
          width={100}
          className={classes.img}
        />
      </div>
      <div className={classes.right}>
        <h3 className={classes.name} onClick={handleChannel}>
          {props.name}
        </h3>
        <strong>
          Views : {props.viewCount} &nbsp;&nbsp; Videos : {props.videoCount}{" "}
          &nbsp;&nbsp;
          {props.hiddenSubscriberCount
            ? null
            : `Subscriber : ${props.subscriberCount}`}
        </strong>
        <p className="description">{limitDescription(props.description)}</p>
      </div>
    </div>
  );
}

export default ChannelCard;

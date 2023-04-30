import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
const { Meta } = Card;
const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';
const SearchCard = ({ prop }) => (
  <Card
    style={{
      width: 300,
    }}
    cover={<img alt="example" src={prop?.image?.thumbnail?.contentUrl} />}
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      //   avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
      title={prop.name}
      description={prop.description}
    />
  </Card>
);
export default SearchCard;

import Form from './Form';
import FeedItem from './FeedItem';

export default function Feed(props: { isSignedUp: boolean }) {
  return (
    <div id="feed">
      <div className="container mx-auto py-10 px-3 max-w-md flex flex-col gap-y-5 mb-28">
        {props.isSignedUp && <Form />}
        <div id="posts" className="flex flex-col gap-y-5 mb-28">
          <FeedItem />
          <FeedItem />
          <FeedItem />
        </div>
      </div>
    </div>
  );
}

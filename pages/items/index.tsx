import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { getSearchList } from 'src/api/items';
import { IGetSearchListResponse } from 'src/api/items/index.types';
import BreadCrumbs from '../../src/components/breadcrumbs';
import Container from '../../src/components/container';
import ItemsPage from '../../src/modules/ItemsPage';

interface IItemPageServerResponse {
  listItems: IGetSearchListResponse
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const searchValue = context.query?.search as string;

  const listItems = await getSearchList(searchValue);

  return {
    props: {
      listItems,
    },
  };
};

const Items: React.FC<IItemPageServerResponse> = (props) => {
  const { listItems } = props;
  const router = useRouter();
  const onSelectItem = (id: string) => {
    router.push(`/items/${id}`);
  };

  return (
    <Container>
      <BreadCrumbs categoryList={[]} />
      <ItemsPage items={listItems} onClickItem={onSelectItem} />
    </Container>
  );
};

export default Items;

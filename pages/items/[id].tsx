import { GetServerSideProps } from 'next';
import { IGetItemResponse } from 'src/api/items/index.types';
import { getItem } from '../../src/api/items';
import BreadCrumbs from '../../src/components/breadcrumbs';
import Container from '../../src/components/container';
import ItemPage from '../../src/modules/ItemPage';

interface IItemPage {
  itemData: IGetItemResponse
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const searchValue = context.query?.id as string;

  const itemData = await getItem(searchValue);

  return {
    props: {
      itemData,
    },
  };
};

const Item: React.FC<IItemPage> = (props) => {
  const { itemData } = props;

  return (
    <Container>
      <BreadCrumbs categoryList={itemData.categoryList} />
      <ItemPage
        {...itemData}
      />
    </Container>
  );
};

export default Item;

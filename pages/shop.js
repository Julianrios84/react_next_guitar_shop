import Layout from '../components/layout';
import Guitar from '../components/guitar';
import styles from '../styles/grid.module.css';

export default function Shop({ guitars }) {
  return (
    <Layout
      title={'Shop Virtual'}
      description="Virtual shop, sale of guitars, instruments, Guitar"
    >
      <main className="container">
        <h1 className="heading">Our Collection</h1>

        <div className={styles.grid}>
          {guitars?.map((guitar) => (
            <Guitar key={guitar.id} guitar={guitar.attributes} />
          ))}
        </div>
      </main>
    </Layout>
  );
}

// export async function getStaticProps() {
//     const respuesta = await fetch(`${process.env.API_URL}/guitars?populate=picture`)
//     const {data: guitarras} = await respuesta.json()
//     return {
//       props: {
//         guitarras
//       }
//     }
// }

export async function getServerSideProps() {
  const response = await fetch(
    `${process.env.API_URL}/guitars?populate=picture`
  );
  const { data: guitars } = await response.json();
  return {
    props: {
      guitars
    }
  };
}

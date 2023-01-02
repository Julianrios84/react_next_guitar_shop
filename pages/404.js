import Link from 'next/link';
import Layout from '../components/layout';

export default function Page404() {
  return (
    <Layout title="Page not found">
      <p className="error">Page not found</p>
      <Link href="/">
        <a className="error-link">Go home</a>
      </Link>
    </Layout>
  );
}

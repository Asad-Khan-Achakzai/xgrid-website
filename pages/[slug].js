import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function DynamicRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Get the slug parameter from the URL
    const { slug } = router.query;

    const redirectMappings = {
      'aws-migration': 'cloud-devops-services',
      blog: 'resources',
      'mobile-application-development': 'web-mobile-app-development',
      'sales-enablement-and-sandboxing': '/',
      testimonials: 'resources/?filter=success_stories',
      'ui-and-application-development': 'web-mobile-app-development',
    };

    // Check if the slug is in the redirect mappings
    if (slug && redirectMappings.hasOwnProperty(slug)) {
      const redirectPath = redirectMappings[slug];
      router.push(`/${redirectPath}`);
    } else {
      router.push('/404');
    }
  }, [router.query]);

  return null;
}

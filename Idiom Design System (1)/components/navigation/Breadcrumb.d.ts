/** Muted ancestor links, ink current page, chevron glyphs between. Sits above the page title on record surfaces. */
export interface BreadcrumbProps {
  trail: Array<{label: string; href?: string}>;
}
export declare function Breadcrumb(props: BreadcrumbProps): JSX.Element;

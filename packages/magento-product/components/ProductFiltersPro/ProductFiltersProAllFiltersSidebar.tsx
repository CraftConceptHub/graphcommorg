import { Box, SxProps, Theme } from '@mui/material'
import { ProductFilterEqualSection } from './ProductFilterEqualSection'
import { ProductFilterRangeSection } from './ProductFilterRangeSection'
import {
  ProductFiltersProAggregations,
  ProductFiltersProAggregationsProps,
} from './ProductFiltersProAggregations'
import { ProductFiltersProLimitSection } from './ProductFiltersProLimitSection'
import {
  ProductFiltersProSortSection,
  ProductFiltersProSortSectionProps,
} from './ProductFiltersProSortSection'

export type ProductFiltersProAllFiltersSidebarProps = ProductFiltersProAggregationsProps &
  ProductFiltersProSortSectionProps & { sx?: SxProps<Theme> }

const defaultRenderer = {
  FilterRangeTypeInput: ProductFilterRangeSection,
  FilterEqualTypeInput: ProductFilterEqualSection,
}

export function ProductFiltersProAllFiltersSidebar(props: ProductFiltersProAllFiltersSidebarProps) {
  const { sort_fields, total_count, renderer, sx = [] } = props

  return (
    <Box sx={[{ display: { xs: 'none', md: 'grid' } }, ...(Array.isArray(sx) ? sx : [sx])]}>
      <ProductFiltersProSortSection sort_fields={sort_fields} total_count={total_count} />
      <ProductFiltersProLimitSection />
      <ProductFiltersProAggregations renderer={{ ...defaultRenderer, ...renderer }} />
    </Box>
  )
}

import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  EmptyState
} from '../../../styles/components/admin/dataTableStyles';

interface Column<T> {
  key: string;
  label: string;
  width?: string;
  render?: (item: T) => React.ReactNode;
}

interface DataTableProps<T> {
  columns: Column<T>[];
  data: T[];
  onRowClick?: (item: T) => void;
  emptyMessage?: string;
}

export default function DataTable<T extends Record<string, any>>({
  columns,
  data,
  onRowClick,
  emptyMessage = '데이터가 없습니다'
}: DataTableProps<T>) {
  if (data.length === 0) {
    return (
      <TableContainer>
        <EmptyState>{emptyMessage}</EmptyState>
      </TableContainer>
    );
  }

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map(column => (
              <TableHeader key={column.key} width={column.width}>
                {column.label}
              </TableHeader>
            ))}
          </TableRow>
        </TableHead>
        <tbody>
          {data.map((item, index) => (
            <TableRow
              key={index}
              clickable={!!onRowClick}
              onClick={() => onRowClick?.(item)}
            >
              {columns.map(column => (
                <TableCell key={column.key}>
                  {column.render ? column.render(item) : item[column.key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
}

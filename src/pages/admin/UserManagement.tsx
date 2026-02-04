import { useState, useMemo } from 'react';
import { useAdmin } from '../../contexts/AdminContext';
import UserTable from '../../components/admin/users/UserTable';
import SearchFilter from '../../components/admin/common/SearchFilter';
import Pagination from '../../components/admin/common/Pagination';
import { UserManagementContainer } from '../../styles/pages/admin/userManagementStyles';

const ITEMS_PER_PAGE = 10;

export default function UserManagement() {
  const { users, updateUserRole, suspendUser, activateUser } = useAdmin();
  const [searchQuery, setSearchQuery] = useState('');
  const [filterValues, setFilterValues] = useState<Record<string, string>>({});
  const [currentPage, setCurrentPage] = useState(1);

  const filters = [
    {
      key: 'role',
      label: '역할',
      options: [
        { value: 'admin', label: '관리자' },
        { value: 'user', label: '사용자' }
      ]
    },
    {
      key: 'status',
      label: '상태',
      options: [
        { value: 'active', label: '활성' },
        { value: 'suspended', label: '정지됨' },
        { value: 'inactive', label: '비활성' }
      ]
    }
  ];

  const handleFilterChange = (key: string, value: string) => {
    setFilterValues(prev => ({ ...prev, [key]: value }));
    setCurrentPage(1);
  };

  const filteredUsers = useMemo(() => {
    let result = users;

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        user =>
          user.name.toLowerCase().includes(query) ||
          user.username.toLowerCase().includes(query) ||
          user.email?.toLowerCase().includes(query)
      );
    }

    // Role filter
    if (filterValues.role) {
      result = result.filter(user => user.role === filterValues.role);
    }

    // Status filter
    if (filterValues.status) {
      result = result.filter(user => user.status === filterValues.status);
    }

    return result;
  }, [users, searchQuery, filterValues]);

  const totalPages = Math.ceil(filteredUsers.length / ITEMS_PER_PAGE);
  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <UserManagementContainer>
      <SearchFilter
        searchValue={searchQuery}
        onSearchChange={setSearchQuery}
        filters={filters}
        filterValues={filterValues}
        onFilterChange={handleFilterChange}
        searchPlaceholder="이름, 사용자명, 이메일로 검색..."
      />

      <UserTable
        users={paginatedUsers}
        onRoleChange={updateUserRole}
        onSuspend={suspendUser}
        onActivate={activateUser}
      />

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </UserManagementContainer>
  );
}

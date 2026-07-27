// tableStyles.js
export const customStyles = (isDark) => ({
  table: {
    style: {
      backgroundColor: isDark ? '#0f172a' : 'white',
    },
  },
  headRow: {
    style: {
      backgroundColor: isDark ? 'rgba(15, 23, 42, 0.4)' : 'rgba(241, 245, 249, 0.5)',
      borderBottom: `1px solid ${isDark ? 'rgba(30, 41, 59, 0.8)' : 'rgba(241, 245, 249, 0.8)'}`,
      minHeight: '42px',
    },
  },
  headCells: {
    style: {
      fontSize: '10px',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      color: isDark ? '#64748b' : '#94a3b8',
      paddingTop: '14px',
      paddingBottom: '14px',
      paddingLeft: '20px',
      paddingRight: '20px',
      borderRight: 'none',
    },
  },
  cells: {
    style: {
      fontSize: '12px',
      fontWeight: '600',
      color: isDark ? '#e2e8f0' : '#1e293b',
      paddingTop: '16px',
      paddingBottom: '16px',
      paddingLeft: '20px',
      paddingRight: '20px',
    },
  },
  rows: {
    style: {
      backgroundColor: isDark ? '#0f172a' : 'white',
      borderBottom: `1px solid ${isDark ? 'rgba(30, 41, 59, 0.8)' : 'rgba(241, 245, 249, 0.8)'}`,
      '&:hover': {
        backgroundColor: isDark ? 'rgba(30, 41, 59, 0.3)' : 'rgba(241, 245, 249, 0.5)',
      },
    },
    selectedHighlightStyle: {
      backgroundColor: isDark ? 'rgba(99, 102, 241, 0.15)' : 'rgba(99, 102, 241, 0.05)',
      borderLeft: '3px solid #6366f1',
    },
  },
  pagination: {
    style: {
      backgroundColor: isDark ? '#0f172a' : 'white',
      borderTop: `1px solid ${isDark ? 'rgba(30, 41, 59, 0.8)' : 'rgba(241, 245, 249, 0.8)'}`,
      padding: '16px',
    },
  },
  noData: {
    style: {
      fontSize: '14px',
      fontWeight: '600',
      color: isDark ? '#64748b' : '#94a3b8',
      padding: '40px',
    },
  },
});
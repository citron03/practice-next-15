// eslint-disable-next-line no-undef
module.exports = {
  // 파일 패턴과 그에 대한 명령어 설정
  '*.ts': 'eslint --fix',
  '*.tsx': 'eslint --fix',
  '*.js': 'eslint --fix',
  '*.jsx': 'eslint --fix',
  '*.{ts,tsx,js,jsx}': 'prettier --write',
};

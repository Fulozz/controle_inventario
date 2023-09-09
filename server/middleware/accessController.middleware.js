// Middleware para verificar o cargo de um usuário
const checkUserRole = (allowedRoles) => {
    return (req, res, next) => {
      // Suponha que o cargo do usuário esteja armazenado na propriedade req.user.role
      const userRole = req.user.role; // Você precisa definir isso em seu processo de autenticação
  
      if (allowedRoles.includes(userRole)) {
        // O usuário tem permissão para acessar este recurso
        next(); // Continue com o próximo middleware ou rota
      } else {
        // O usuário não tem permissão para acessar este recurso
        res.status(403).send('Acesso negado'); // Status 403 significa proibido
      }
    };
  };
  
  // Exemplo de uso do middleware para permitir apenas administradores
  app.get('/admin/resource', checkUserRole(['admin']), (req, res) => {
    // Somente administradores têm permissão para acessar esta rota
    res.send('Você está acessando um recurso de administrador');
  });
  
  // Exemplo de uso do middleware para permitir apenas usuários normais
  app.get('/user/resource', checkUserRole(['user']), (req, res) => {
    // Somente usuários normais têm permissão para acessar esta rota
    res.send('Você está acessando um recurso de usuário normal');
  });
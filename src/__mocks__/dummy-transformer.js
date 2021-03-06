const { LogContexts, LogLevels } = require('bs-logger')

function factory(tsCompiler) {
  const logger = tsCompiler.configSet.logger.child({ namespace: 'dummy-transformer' })
  const ts = tsCompiler.configSet.compilerModule
  // eslint-disable-next-line no-console
  console.log(tsCompiler.program)

  function createVisitor(_ctx, _) {
    return (node) => node
  }

  return (ctx) =>
    logger.wrap({ [LogContexts.logLevel]: LogLevels.debug, call: null }, 'visitSourceFileNode(): dummy', (sf) =>
      ts.visitNode(sf, createVisitor(ctx, sf))
    )
}

exports.factory = factory

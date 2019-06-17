from behave import fixture
from subprocess import Popen, PIPE
import logging
import os

LOG = logging.getLogger('behave')
BDT_PATH = os.getcwd()
ROOT_PATH = os.path.normpath(os.path.join(BDT_PATH, '..'))
AUTH_SERVER_PATH = os.path.join(ROOT_PATH, 'server')

@fixture
def auth_server(context):
  with open('auth_server.log', 'w') as f:
    proc = Popen(['node', 'build/server'], stdin=PIPE, stdout=f, stderr=f, cwd=AUTH_SERVER_PATH)
    LOG.info('auth_server started')
    context.auth_server = proc
    yield context.auth_server
    LOG.info(f'will terminate auth_server pid:{proc.pid}')
    proc.terminate()